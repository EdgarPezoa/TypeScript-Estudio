import { Injectable } from '@angular/core';
import { Articulo } from '../models/Articulo';
import { Usuario } from '../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  articulo: Articulo;
  apiHttp = "https://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) {
    this.articulo = new Articulo();
  }

  leerNoticias(): Observable<Articulo[]>{
    return this.httpClient.get<Articulo[]>(this.apiHttp + "/posts");
  }

  leerUsuario(userId:number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.apiHttp + "/users/" + userId);
  }

  leerUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.apiHttp + "/users");
  }

  guardarArticulo(articuloNuevo:Articulo): Observable<Articulo>{
    return this.httpClient.post<Articulo>(this.apiHttp + '/posts', articuloNuevo);
  }

  borrarArticulo(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.apiHttp + "/posts/" + id);
  }
  
  actualizarArticulo(articulo:Articulo): Observable<Articulo>{
    return this.httpClient.put<Articulo>(this.apiHttp + "/posts/" + articulo.id, articulo);
  }
}
