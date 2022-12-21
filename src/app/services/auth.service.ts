import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private cookieService:CookieService) { }

  guardarToken(token) {
    this.cookieService.set('token',token, {expires: 2, sameSite: 'Lax'})
  }

  guardarUsuario(usuario) {
    this.cookieService.set('usuario',usuario,{expires: 2, sameSite: 'Lax'})
  }
  
  obtenerToken() {
    return this.cookieService.get('token')
  }

  obtenerUsuario() {
    return this.cookieService.get('usuario')
  }

}
