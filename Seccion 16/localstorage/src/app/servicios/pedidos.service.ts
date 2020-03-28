import { Injectable } from '@angular/core';
import { Pedidos } from '../models/Pedidos';
import { Productos } from '../models/Productos';
import { PedidosDetalles } from '../models/PedidosDetalles';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedidos;
  constructor() { 
    this.pedido = new Pedidos();
  }
  
}
