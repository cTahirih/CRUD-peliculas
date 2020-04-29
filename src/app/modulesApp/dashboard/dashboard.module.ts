import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule,
} from '@angular/material';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { DashboardRouting } from './dashboard.routing';

import { CoreModule } from '../../core/core.module';

import { DashboardComponent } from './dashboard.component';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/moviesPage/movies.component';
import { PopupNewMovieComponent } from './components/popup-new-movie/popup-new-movie.component';
import { PopupEditMovieComponent } from './components/popup-edit-movie/popup-edit-movie.component';
import { CardAlertsComponent } from './components/card-alerts/card-alerts.component';
import { ProfilePageComponent } from './components/profilePage/profile-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardAlertsComponent,
    DashboardComponent,
    FormMovieComponent,
    MoviesComponent,
    PopupEditMovieComponent,
    PopupNewMovieComponent,
    ProfilePageComponent
  ],
  exports: [

  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRouting,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ]
})
export class DashboardModule { }
