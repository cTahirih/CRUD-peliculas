import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';

import { randomDate } from 'src/app/core/functions/date.funtions';
import {PopupNewMovieComponent} from '../popup-new-movie/popup-new-movie.component';
import {PopupEditMovieComponent} from '../popup-edit-movie/popup-edit-movie.component';

export interface MovieData {
  id: string;
  nameMovie: string;
  date: string;
  state: string;
  edit: string;
}

/** Constants used to fill up our data base. */
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
  dataSource: MatTableDataSource<MovieData>;
  movies: any[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog
  ) {
    // Create 100 users
    this.movies = Array.from({length: 100}, (_, k) => createMovies(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.movies);
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
      data: {name: 'nombre', animal: 'pelicula'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditMoviePopup(id: number): void {
    const dialogRef = this.dialog.open(PopupEditMovieComponent, {
      width: '60%',
      data: {name: 'nombre', animal: 'pelicula'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteMovie(id: number) {
    console.log(this.movies.filter((elm) => elm.id === id));
  }

}

function createMovies(id: number): MovieData {
  const nameMovie = MOVIES[Math.round(Math.random() * (MOVIES.length - 1))] + ' ' +
    MOVIES[Math.round(Math.random() * (MOVIES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    nameMovie,
    date: randomDate(new Date(2012, 0, 1), new Date()),
    state: STATE[Math.round(Math.random() * (STATE.length - 1))],
    edit: 'editar'
  };
}


