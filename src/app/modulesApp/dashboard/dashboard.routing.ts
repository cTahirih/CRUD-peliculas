import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { MoviesComponent } from './components/moviesPage/movies.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MoviesComponent},
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting {}
