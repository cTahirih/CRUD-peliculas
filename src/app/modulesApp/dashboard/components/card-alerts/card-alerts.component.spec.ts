import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlertsComponent } from './card-alerts.component';

describe('HomeComponent', () => {
  let component: CardAlertsComponent;
  let fixture: ComponentFixture<CardAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAlertsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
