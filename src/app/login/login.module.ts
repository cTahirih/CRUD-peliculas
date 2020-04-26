import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginAsideComponent } from './components/login-aside/login-aside.component';

import { LoginRouting } from './login.routing';

// material angular
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginAsideComponent
  ],
  exports: [
    LoginAsideComponent
  ],
  imports: [
    CommonModule,
    LoginRouting,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
