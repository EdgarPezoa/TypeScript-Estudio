import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/Articulo';
import { UsuarioService } from '../services/usuario.service';
import { ArticuloService } from '../services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos:Array<Articulo>
  constructor(
    public usuarioService: UsuarioService, 
    public articuloService:ArticuloService,
    private router: Router
    ){
    this.articulos = new Array<Articulo>();
  }

  ngOnInit(): void {
    this.articuloService.leerNoticias().subscribe((articulosApi)=>{
      this.articulos = articulosApi;
    });
    

    let articuloEnviar:Articulo = new Articulo();
    articuloEnviar.id = 420;
    articuloEnviar.title = "Titulo magistral";
    articuloEnviar.body = "Este es la descripcion del articulo";
    articuloEnviar.userId = 4;
    
    this.articuloService.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=>{
      this.articulos.push(articuloCreado);
    });
  }

  irDetalle(articulo: Articulo){
    this.articuloService.articulo = articulo;
    this.router.navigateByUrl('/articulo-detalle');
  }

  borrar(id:number){
    this.articuloService.borrarArticulo(id).subscribe((data)=>{
      console.log(data);
      
    });
  }

  actualizar(articulo:Articulo){
    this.articuloService.articulo = articulo;
    this.router.navigateByUrl('/articulo-agregar/false');
  }
}
