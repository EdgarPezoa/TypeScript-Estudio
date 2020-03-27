import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { ArticuloService } from '../services/articulo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '../models/Articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  articulo: Articulo;
  usuarios:Usuario[];
  formArticulo: FormGroup;
  esNuevo:boolean;
  constructor(private articuloService: ArticuloService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute) { 
    this.articulo = new Articulo();
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    this.esNuevo =  JSON.parse(this.activeRoute.snapshot.params.esNuevo);
    
    this.formArticulo = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    });
    this.articuloService.leerUsuarios().subscribe((usuariosApi)=>{
      return this.usuarios = usuariosApi;
    });

    if(!this.esNuevo){
      this.articulo = this.articuloService.articulo;
      this.formArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      });
    }
  }

  agregar(){
    this.articulo = this.formArticulo.value as Articulo;
    this.articuloService.guardarArticulo(this.articulo).subscribe((articuloApi)=>{
      console.log('Articulo registrado');
      this.formArticulo.reset();
    });
  }

  editar(){
    this.articulo = this.formArticulo.value as Articulo;
    this.articulo.id = this.articuloService.articulo.id;
    this.articuloService.actualizarArticulo(this.articulo).subscribe((articuloApi)=>{
      console.log('Articulo Actualizado');
      this.formArticulo.reset();
    });
  }

}
