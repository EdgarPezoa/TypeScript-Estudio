import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulos:Array<Articulo> = new Array<Articulo>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre:"Televisor HD",
        descripcion: "Televisor con muy buena resolución",
        stock: 2,
        precio: 10000
      },
      {
        nombre:"Microondas",
        descripcion: "Calienta tu comida de manera rápida",
        stock: 4,
        precio: 5000
      },
      {
        nombre:"Computador",
        descripcion: "Maneje sus documentos, 1 tera de ram",
        stock: 21,
        precio: 5000
      },
    );
  }

  pasarParametro(articuloRecivido:Articulo ){
    this.router.navigate(['articuloDetalle',{articulo: JSON.stringify(articuloRecivido)}])
  }

}
