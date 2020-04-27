import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioInterface} from '../interface/login.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyDSCkcXLb9H4jsqQdlFxT8fy4C3W_-Yn0s';

  userToken: string;

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(
    private http: HttpClient
  ) {
    this.leerToken();
  }

  logOut() {
    localStorage.removeItem('token');
  }

  login( user: UsuarioInterface) {

    const authData = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/accounts:signInWithPassword?key=${ this.apiKey}`,
      authData
    ).pipe(
      map((response: any) => {
        this.guardarToken(response.idToken);
        return response;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    return expiraDate > new Date();
  }
}
