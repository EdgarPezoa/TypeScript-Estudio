import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  constructor() { 
    this.usuario = new Usuario();
    this.usuario.id = 1; 
    this.usuario.name = "Edgar";
    this.usuario.email = "Pezoa.1@gmail.com";
  }
}
