import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { MoviesComponent } from './components/moviesPage/movies.component';

import { AuthGuard } from '../login/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'movies', component: MoviesComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting {}
