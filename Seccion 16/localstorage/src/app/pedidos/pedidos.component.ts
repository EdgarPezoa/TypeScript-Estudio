import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';
import { Pedidos } from '../models/Pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor( public pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

}
