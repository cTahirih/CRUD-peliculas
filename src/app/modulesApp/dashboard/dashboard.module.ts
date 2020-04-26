import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule
} from '@angular/material';

import { DashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/moviesPage/movies.component';
import { PopupNewMovieComponent } from './components/popup-new-movie/popup-new-movie.component';
import { PopupEditMovieComponent } from './components/popup-edit-movie/popup-edit-movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    FormMovieComponent,
    MoviesComponent,
    PopupEditMovieComponent,
    PopupNewMovieComponent
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
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
