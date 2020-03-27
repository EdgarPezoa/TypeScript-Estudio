import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Page404Component } from './page404/page404.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { UsuarioService } from './services/usuario.service';
import { ArticuloService } from './services/articulo.service';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    Page404Component,
    ArticuloDetalleComponent,
    AgregarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ArticuloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
