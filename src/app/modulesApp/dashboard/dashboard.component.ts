import {Component, HostBinding, OnInit} from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @HostBinding('class') class = 'w-100';
  LINKS = [
    {
      url: '/dashboard/home',
      titleLink: 'Dashboard'
    },
    {
      url: '/dashboard/movies',
      titleLink: 'Películas'
    },
    {
      url: '/dashboard/home',
      titleLink: 'Turnos'
    },
    {
      url: '/dashboard/home',
      titleLink: 'Administradores'
    },
    {
      url: '/dashboard/profile',
      titleLink: 'Perfil'
    },
  ];
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  logOut() {
    this.loginService.logOut();
    this.router.navigateByUrl('/home/login')
  }
}
