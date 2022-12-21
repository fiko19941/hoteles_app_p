import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-homeregistro',
  templateUrl: './homeregistro.page.html',
  styleUrls: ['./homeregistro.page.scss'],
})
export class HomeregistroPage implements OnInit {

  formularioRegistro: FormGroup;
  mensajeRegistro: boolean = false;

  constructor(private Servicios:ServiciosService) { 
    this.contruirFormulario();
  }

  ngOnInit() {
  }

  registrar() {
    let dataUsuario = this.formularioRegistro.value;
    console.log(dataUsuario)
    this.Servicios.agragarUsuario(dataUsuario).subscribe((resp: any) => {
      const { correo, contrasenia } = resp;
      let infoLogin = { correo, contrasenia } 
      this.Servicios.agregarUsuarioLogin(infoLogin).subscribe((resp: any) => {
        console.log(resp)

        if (resp) {
          this.mensajeRegistro = true;
        } else {
          this.mensajeRegistro = false;
        }
      })
      
    })
  }


  contruirFormulario() {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl(''),
      documento: new FormControl(''),
      contrasenia: new FormControl(''),
      correo: new FormControl(''),
      telefono: new FormControl(''),
    })
  }

  // {
  //   "nombre": "arnold lozano",
  //   "documento": "1223314",
  //   "contrasenia": "1233345",
  //   "correo": "sinistetraa@gmail.com",
  //   "telefono": "3122341"
  // }

}
