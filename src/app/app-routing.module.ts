import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio/login',  pathMatch: 'full'},
  {path: '',component: AppComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./modulesApp/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modulesApp/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },

  { path: '**', redirectTo: '/inicio/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
