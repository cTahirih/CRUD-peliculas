import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovieComponent } from './form-movie.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

describe('HomeComponent', () => {
  let component: FormMovieComponent;
  let fixture: ComponentFixture<FormMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMovieComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
