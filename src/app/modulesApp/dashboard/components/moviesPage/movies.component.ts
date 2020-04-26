import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';

import { date2String } from 'src/app/core/functions/date.funtions';
import { DataMovie, MovieDataInterface } from '../../interfaces/movie.interface';

import { PopupNewMovieComponent } from '../popup-new-movie/popup-new-movie.component';
import { PopupEditMovieComponent } from '../popup-edit-movie/popup-edit-movie.component';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nameMovie', 'date', 'state', 'edit'];
  dataSource: MatTableDataSource<MovieDataInterface>;
  movies: any[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private moviesService: MoviesService
  ) {
    this.getListMovies();
  }

  ngOnInit() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openNewMoviePopup(): void {
    const dialogRef = this.dialog.open(PopupNewMovieComponent, {
      width: '60%',
      data: {
        id: this.movies.length,
        type: 'open'
      }
    });

    dialogRef.afterClosed().subscribe((result: DataMovie) => {
      if (result.id) {
        const newMovie = {
          id: result.id,
          nameMovie: result.nameMovie,
          date: date2String(result.date),
          state: this.isActive(result.state)
        };

        this.movies.push(newMovie);
        this.dataSource = new MatTableDataSource(this.movies);
      }
    });
  }

  openEditMoviePopup(id: number): void {
    const dialogRef = this.dialog.open(PopupEditMovieComponent, {
      width: '60%',
      data: {
        id,
        type: 'edit',
        data: this.movies.filter((elm) => elm.id === id)[0]
      }
    });

    dialogRef.afterClosed().subscribe((result: DataMovie) => {
      if (result.nameMovie) {
        let index: number;
        this.movies.map((elm, i) => {
          if (elm.id === result.id) {
            index = i;
          }
        });

        console.log(index);
        this.movies[index] = {
          id: result.id,
          nameMovie: result.nameMovie,
          date: date2String(result.date),
          state: this.isActive(result.state)
        };

        this.dataSource = new MatTableDataSource(this.movies);
      }
    });
  }

  getListMovies() {
    this.moviesService.getMovies()
      .subscribe(
        (response: MovieDataInterface[]) => {
          if(response) {
            this.movies = response;
            // Assign the data to the data source for the table to render
            this.dataSource = new MatTableDataSource(this.movies);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }
      );
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter((elm) => elm.id !== id);

    this.dataSource = new MatTableDataSource(this.movies);
  }

  isActive(value) {
    return value === 'active-0' ? 'Activo' : 'Inactivo';
  }

}



