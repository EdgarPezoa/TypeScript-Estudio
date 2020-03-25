import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo: Articulo;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.articulo = JSON.parse(this.route.snapshot.params.articulo);
    
  }

}
