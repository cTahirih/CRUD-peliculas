import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent,
    children: [
      {path: 'login', component: LoginPageComponent},
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouting {}
