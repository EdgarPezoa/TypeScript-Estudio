import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public pedidosService: PedidosService) { 
    
  }

  ngOnInit(): void {
  }

}