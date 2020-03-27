import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Page404Component } from './page404/page404.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'articulo-detalle', component: ArticuloDetalleComponent },
  { path: 'articulo-agregar', component: AgregarArticuloComponent },
  { path: 'articulo-agregar/:esNuevo', component: AgregarArticuloComponent },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
