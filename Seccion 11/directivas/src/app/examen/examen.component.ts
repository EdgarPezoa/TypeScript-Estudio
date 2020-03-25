import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre:string;
  apellido:string;
  exelencia:boolean;

  constructor(){
    // this.nombre = this.nombre;
    // this.apellido = this.apellido;
    // this.exelencia = this.exelencia;
  }
}

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {
  alumno:Alumno = new Alumno();
  alumnos:Array<Alumno> = new Array<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }

  addAlumno(){
    let nombre = this.alumno.nombre;
    let apellido = this.alumno.apellido;
    let exelencia = this.alumno.exelencia;

    this.alumnos.push({
      nombre: nombre,
      apellido: apellido,
      exelencia: exelencia
    });
    console.log(this.alumnos);
    this.alumno.nombre = "";
    this.alumno.apellido = "";
    this.alumno.exelencia = false;
  }
}
