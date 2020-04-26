import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
// Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSidenavModule} from '@angular/material';

import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

import { DashboardRouting } from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  declarations: [
    RegisterUserComponent,
    HomeComponent,
    DashboardComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    DashboardRouting,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
