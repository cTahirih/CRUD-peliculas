import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';

import { date2String } from 'src/app/core/functions/date.funtions';
import { createMovies } from '../../../../core/functions/movie.functions';
import { DataMovie } from '../../interfaces/movie.interface';

import { PopupNewMovieComponent } from '../popup-new-movie/popup-new-movie.component';
import { PopupEditMovieComponent } from '../popup-edit-movie/popup-edit-movie.component';

const STATE: string[] = [
  'Activo', 'Inactivo'
];
const MOVIES: string[] = [
  'El Padrino', 'La vida es Bella', 'El club de la lucha',
  'Cadena perpetua', 'La naranja mecánica', 'Forrest Gump'
];

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nameMovie', 'date', 'state', 'edit'];
  dataSource: MatTableDataSource<DataMovie>;
  movies: any[];
  formMovies: FormGroup;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    // Create n movies
    this.movies = Array.from({length: 5}, (_, k) => createMovies(k + 1, MOVIES, STATE));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.movies);

    this.generateFormMovie();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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
      if (result) {
        const newMovie = {
          id: this.movies.length + 1,
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

    this.afterClosedPopup(dialogRef, id - 1);
  }

  afterClosedPopup(dialogRef, id) {
    dialogRef.afterClosed().subscribe(result => {
      this.movies[id] = {
        id,
        nameMovie: result.nameMovie,
        date: date2String(result.date),
        state: this.isActive(result.state)
      };

      this.dataSource = new MatTableDataSource(this.movies);
    });
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter((elm) => elm.id !== id);

    this.dataSource = new MatTableDataSource(this.movies);
  }

  isActive(value) {
    return value === 'active-0' ? 'Activo' : 'Inactivo';
  }

  generateFormMovie() {
    this.formMovies = this.formBuilder.group({
      id: [''],
      nameMovie: ['', [Validators.required]],
      date: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }
}



