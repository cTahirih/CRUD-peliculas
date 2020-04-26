import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewMovieComponent } from './popup-new-movie.component';

describe('HomeComponent', () => {
  let component: PopupNewMovieComponent;
  let fixture: ComponentFixture<PopupNewMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
