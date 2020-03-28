import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre:string,
  apellido:string,
  edad:number
}

interface Productos{
  nombre:string,
  precio:number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  // clientes:Clientes[];
  productos:Productos[];
  constructor() { 
    // this.clientes = new Array<Clientes>();
    // this.productos = new Array<Productos>();
  }

  ngOnInit(): void {
    // this.clientes.push({
    //   nombre: 'edgar',
    //   apellido: "pezoa",
    //   edad: 24
    // },
    // {
    //   nombre: 'jose',
    //   apellido: "palma",
    //   edad: 23
    // },
    // );

    // this.productos.push(
    //   {
    //     nombre:"Producto 1",
    //     precio: 1000
    //   },
    //   {
    //     nombre:"Producto 2",
    //     precio: 2000
    //   },
    //   {
    //     nombre:"Producto 3",
    //     precio: 3000
    //   }
    // );

  }

  guardarClientes(){
    let clientesAgregar :Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push(
      {
        nombre: 'edgar',
        apellido: "pezoa",
        edad: 24
      },
      {
        nombre: 'jose',
        apellido: "palma",
        edad: 23
      },
    );
    localStorage.setItem('clientes', JSON.stringify(clientesAgregar));
  }
  
  guardarProductos(){
    let productosAgregar :Array<Productos> = new Array<Productos>();
    productosAgregar.push(
      {
        nombre:"Producto 1",
        precio: 1000
      },
      {
        nombre:"Producto 2",
        precio: 2000
      },
      {
        nombre:"Producto 3",
        precio: 3000
      }
    );
    localStorage.setItem('productos', JSON.stringify(productosAgregar));
  }

  // leer(){
  //   this.clientes = JSON.parse(localStorage.getItem('clientes'));
  //   this.productos = JSON.parse(localStorage.getItem('productos'));
  // }

  eliminarClientes(){
    localStorage.removeItem('clientes');
  }

  eliminarProductos(){
    localStorage.removeItem('productos');
  }

  eliminarTodo(){
    localStorage.clear();
  }

  get clientesLocales(): Clientes[]{
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'));
    if(clientesLocalStorage == null){
      return new Array<Clientes>();
    }
    return clientesLocalStorage;
  }

  get productosLocales(): Productos[]{
    let productosLocalStorage: Productos[] = JSON.parse(localStorage.getItem('productos'));
    if(productosLocalStorage == null){
      return new Array<Productos>();
    }
    return productosLocalStorage;
  }

}
