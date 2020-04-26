import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsideComponent } from './login-aside.component';

describe('LoginAsideComponent', () => {
  let component: LoginAsideComponent;
  let fixture: ComponentFixture<LoginAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
