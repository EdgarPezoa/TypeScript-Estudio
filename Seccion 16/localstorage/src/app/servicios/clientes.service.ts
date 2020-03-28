import { Injectable } from '@angular/core';
import { Clientes } from '../models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarLocalStorage(cliente: Clientes){
    let clientesLocal = this.clientesLocalStorage;
    cliente.id = clientesLocal.length;
    clientesLocal.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientesLocal));
  }

  get clientesLocalStorage(): Clientes[]{
    let clientes:Clientes[] = JSON.parse(localStorage.getItem('clientes'));
    if(clientes == null){
      return new Array<Clientes>();
    }
    return clientes;
  }
}
