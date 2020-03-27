import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../services/articulo.service';
import { Articulo } from '../models/Articulo';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo: Articulo;
  usuario: Usuario;
  constructor(private articuloService:ArticuloService) {
    this.usuario = new Usuario();
    this.articulo = articuloService.articulo;
    
    this.articuloService.leerUsuario(this.articulo.userId).subscribe((usuarioApi)=>{
      this.usuario = usuarioApi;
    });
   }

  ngOnInit(): void {
    
  }

}
