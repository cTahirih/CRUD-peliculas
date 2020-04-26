import { MovieDataInterface } from '../../modulesApp/dashboard/interfaces/movie.interface';
import { randomDate } from './date.funtions';

export function createMovies(id: number, MOVIES: string[], STATE: string[]): MovieDataInterface {
  const nameMovie = MOVIES[Math.round(Math.random() * (MOVIES.length - 1))] + ' ' +
    MOVIES[Math.round(Math.random() * (MOVIES.length - 1))].charAt(0) + '.';

  return {
    id,
    nameMovie,
    date: randomDate(new Date(2012, 0, 1), new Date()),
    state: STATE[Math.round(Math.random() * (STATE.length - 1))]
  };
}
