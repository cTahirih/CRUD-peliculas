import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { MoviesService } from '../../services/movies.service';
import {DataMovie, MovieDataInterface} from '../../interfaces/movie.interface';
import {map} from 'rxjs/operators';
import {date2String} from '../../../../core/functions/date.funtions';

class FakeService {
  createMovie(movie: DataMovie) {
    return {
      id: '123',
      nameMovie: 'asdd',
      state: 'active-0',
      date: ''
    }
  }

  updateMovie(movie: DataMovie) {
    return {
      nameMovie: 'asdd',
      state: 'active-0',
      date: ''
    };
  }

  getMovies() {
    return [
      {
        id: '123',
        nameMovie: 'asdd',
        state: 'active-0',
        date: ''
      },
      {
        id: '123',
        nameMovie: 'asdd',
        state: 'active-0',
        date: ''
      }
    ]
  }

  deleteMovie(id: string) {
    return id;
  }
}

xdescribe('HomeComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MoviesService, useClass: FakeService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
