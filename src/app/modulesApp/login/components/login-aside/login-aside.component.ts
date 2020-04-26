import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-aside',
  templateUrl: './login-aside.component.html',
  styleUrls: ['./login-aside.component.scss']
})
export class LoginAsideComponent implements OnInit {
  @HostBinding('class') class = 'd-none d-md-flex align-items-md-center col-md-7';
  constructor() { }

  ngOnInit() {
  }

}
