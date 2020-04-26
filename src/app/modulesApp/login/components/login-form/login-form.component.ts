import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @HostBinding('class') class = 'col-12 mt-5 mt-md-0 col-md-5 d-flex align-items-center justify-content-center h-min';
  formLogin: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      user: ['', Validators.required],
      accessLog: ['', Validators.required],
    });
  }

  get userName() {
    return this.formLogin.controls.user as FormControl;
  }

  get userAccess() {
    return this.formLogin.controls.accessLog as FormControl;
  }

  loginUser() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      this.router.navigateByUrl('/dashboard/home');
    }
  }
}
