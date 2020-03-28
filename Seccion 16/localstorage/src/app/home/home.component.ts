import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { Clientes } from '../models/Clientes';
import { PedidosService } from '../servicios/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes>;
  constructor(private clienteService: ClientesService, public pedidosService: PedidosService, private router: Router) { 
    this.clientes = clienteService.clientesLocalStorage;
  }

  ngOnInit(): void {
  }

  buscarClientes(event){
    let buscar:string = event.target.value.toLowerCase();
    this.clientes = this.clienteService.clientesLocalStorage.filter((clienteBuscar)=>{
      return clienteBuscar.nombre.toLowerCase().includes(buscar);
    });
  }
  irProductos(cliente: Clientes){
    this.pedidosService.pedido.id = cliente.id;
    this.pedidosService.pedido.nombreCliente = cliente.nombre;
    this.router.navigateByUrl('/productos');
  }
}
