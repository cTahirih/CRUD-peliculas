import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material angular
import {MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginAsideComponent } from './components/login-aside/login-aside.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginComponent } from './login.component';

import { LoginRouting } from './login.routing';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginAsideComponent,
    LoginPageComponent,
    LoginComponent
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
        FormsModule,
        MatCheckboxModule
    ]
})
export class LoginModule { }
