import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  URL = environment.URL;

  constructor(private http: HttpClient) { }

  agragarUsuario(body:any) {
    return this.http.post(`${this.URL}/usuarios`,body)
  }

  // http://localhost:3000/usuarios

  agregarUsuarioLogin(body:any) {
    return this.http.post(`${this.URL}/logins`,body)
  }

  logearUsuario(body) {
    return this.http.post(`${this.URL}/identificar`,body)
  }

  obtenerInfoToken(token,vacio?) {
    return this.http.post(`${this.URL}/verificarToken/${token}`,vacio)
  }

}
