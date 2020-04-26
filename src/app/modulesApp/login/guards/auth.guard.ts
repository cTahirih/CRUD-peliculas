import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: LoginService,
    private router: Router
  ) {
  }
  canActivate(): boolean {
    if (this.authService.estaAutenticado()) {
      return true;
    } else {
      this.router.navigateByUrl('/inicio/login');
      return false;
    }
  }
}
