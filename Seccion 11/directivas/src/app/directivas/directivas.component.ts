import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre:string,
  stock:number,
  fabricante:string,
  fecha:Date,
  importante:boolean
};

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  cargando:boolean = false;
  nombres:Array<string> =["Edgar", "Enzo", "José", "Daniel"];
  productos:Array<Producto> = [
    {
      nombre: "Arroz",
      stock: 12,
      fabricante: "ArrozMaster",
      fecha: new Date('04/03/2019'),
      importante:true
    },
    {
      nombre: "Maís",
      stock: 2,
      fabricante: "MaízBrutal",
      fecha: new Date('01/15/2020'),
      importante:false
    },
    {
      nombre: "Cañamo",
      stock: 26,
      fabricante: "Caña",
      fecha: new Date('02/20/2020'),
      importante:true
    },
  ];
  tab:string = "";
  cambioClase:boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  alternarCarga(){
    this.cargando = !this.cargando;
  }

  cambiarTab(tab:string){
    this.tab = tab;
  }

  cambiarClase(){
    this.cambioClase = !this.cambioClase;
  }
}
