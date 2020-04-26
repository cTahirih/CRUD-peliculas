import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovieComponent } from './form-movie.component';

describe('HomeComponent', () => {
  let component: FormMovieComponent;
  let fixture: ComponentFixture<FormMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMovieComponent ]
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
