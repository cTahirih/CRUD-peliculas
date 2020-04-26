import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home/login', pathMatch: 'full'},
  {
    path: 'home',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then( module => module.LoginModule )
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then( module => module.DashboardModule )
  },
  // { path: '**', component: Pagina404},
  // { path: 'not-found', component: Pagina404}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
