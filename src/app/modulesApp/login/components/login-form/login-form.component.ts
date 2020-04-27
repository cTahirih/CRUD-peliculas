import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @HostBinding('class') class = 'col-12 mt-5 mt-md-0 col-md-5 d-flex align-items-center justify-content-center h-min';
  formLogin: FormGroup;
  rememberMe = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
    if (localStorage.getItem('email')) {
      this.formLogin.controls.email.setValue(localStorage.getItem('email'));
      this.formLogin.controls.rememberMe.setValue(true);
    }
  }

  loginUser() {
    if (this.formLogin.valid) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor...'
      });

      Swal.showLoading();
      this.loginService.login({
        email: this.formLogin.value.email,
        password: this.formLogin.value.password
      })
        .subscribe(
          (response) => {
            Swal.close();

            if (this.formLogin.value.rememberMe) {
              localStorage.setItem('email', this.formLogin.value.email);
            }
            this.router.navigateByUrl('/dashboard/home');
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error al autenticar',
              text: err.error.error.message,
            });
          }
        );
    }
  }
}
