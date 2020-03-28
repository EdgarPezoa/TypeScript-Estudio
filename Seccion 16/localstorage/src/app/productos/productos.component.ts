import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/Productos';
import { ProductosService } from '../servicios/productos.service';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos:Productos[];
  
  constructor(private productosService: ProductosService, public pedidosService: PedidosService) {
    this.productos = productosService.productosLocalStorage;
   }

  ngOnInit(): void {
  }

  buscarProductos(event){
    let buscar:string = event.target.value.toLowerCase();
    this.productos = this.productosService.productosLocalStorage.filter((producto)=>{
      return producto.nombre.toLowerCase().includes(buscar);
    });
  }

  agregar(producto: Productos){
    this.pedidosService.pedido.agregarProducto(producto);
    console.log(this.pedidosService.pedido);
    
  }
}
