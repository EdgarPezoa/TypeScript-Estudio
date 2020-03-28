import { Injectable } from '@angular/core';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarLocalSotrage(producto: Productos){
    let productosLocal = this.productosLocalStorage;
    producto.id = productosLocal.length;
    productosLocal.push(producto);
    localStorage.setItem('productos', JSON.stringify(productosLocal));
  }

  get productosLocalStorage(): Productos[]{
    let productosLocal:Productos[] = JSON.parse(localStorage.getItem('productos'));
    if(productosLocal == null){
      return new Array<Productos>();
    }
    return productosLocal;
  }
}
