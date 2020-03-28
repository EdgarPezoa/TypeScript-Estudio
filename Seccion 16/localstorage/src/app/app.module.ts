import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ClientesService } from './servicios/clientes.service';
import { ProductosService } from './servicios/productos.service';
import { PedidosService } from './servicios/pedidos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClientesService,
    ProductosService,
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
