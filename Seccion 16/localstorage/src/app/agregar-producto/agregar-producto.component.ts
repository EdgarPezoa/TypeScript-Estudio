import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/Productos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  formulario:FormGroup;
  constructor(private formBuilder:FormBuilder, private productoService: ProductosService) { 
    this.formulario = this.formBuilder.group({
      nombre:['', Validators.required],
      precio:['', Validators.required],
      descripcion:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  
  agregar(){
    this.productoService.agregarLocalSotrage(this.formulario.value);
    this.formulario.reset();
  }

}
