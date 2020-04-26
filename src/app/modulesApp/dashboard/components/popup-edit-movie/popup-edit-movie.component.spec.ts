import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditMovieComponent } from './popup-edit-movie.component';

describe('HomeComponent', () => {
  let component: PopupEditMovieComponent;
  let fixture: ComponentFixture<PopupEditMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEditMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
