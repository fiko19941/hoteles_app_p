import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciosService } from '../services/servicios.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin: FormGroup;

  constructor(private service: ServiciosService,
    private authService: AuthService,
    private router:Router) { 
    this.construirFormulario()
  }
  
  login() {
    let usuario = this.formularioLogin.value;
    this.service.logearUsuario(usuario).subscribe((resp: any) => {
      let token = resp.token;
      this.authService.guardarToken(token);
      if (token) {
        this.router.navigate(['/home/homemenu'])
      }
    })
  }
  
  construirFormulario() {
    this.formularioLogin = new FormGroup({
      correo: new FormControl(''),
      contrasenia: new FormControl('')
    })
  }

}
