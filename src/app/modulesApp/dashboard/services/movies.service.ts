import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { DataMovie, MovieDataInterface} from '../interfaces/movie.interface';
import {date2String} from '../../../core/functions/date.funtions';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private URL_BASE = 'https://loginapp-2f965.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  createMovie(movie: DataMovie) {
    return this.http.post(`${this.URL_BASE}/movies.json`, movie)
      .pipe(
        map( (resp: any) => {
          if (resp.name) {
            movie.id = resp.name;
            return movie;
          }
        })
      );
  }

  updateMovie(movie: DataMovie) {
    const movieTemp = {
      ...movie
    };

    delete movieTemp.id;
    return this.http.put(`${this.URL_BASE}/movies/${movie.id}.json`, movieTemp);
  }

  getMovies() {
    return this.http.get(`${this.URL_BASE}/movies.json`)
      .pipe(
        map(this.createArrayMovies)
      );
  }

  private createArrayMovies( moviesObj: object) {
    const MOVIES: MovieDataInterface[] = [];

    if (moviesObj === null) {
      return [];
    }

    Object.keys(moviesObj).forEach( key => {
      const movie: MovieDataInterface = moviesObj[key];
      movie.id = key;
      movie.date = date2String(movie.date);
      movie.state = movie.state === 'active-0' ? 'Activo' : 'Inactivo';

      MOVIES.push(movie);
    });

    return MOVIES;
  }
}
