import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre:string = "Edgar";
  apellido:string = "Pezoa";
  alumno:any = {
    nombre: "Edgar",
    apellido: "Pezoa",
    edad: 24
  }
  inputNuevo:string = "Hola mundo";
  correo:string = '';
  password:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.correo);
    console.log(this.password);
  }

}
