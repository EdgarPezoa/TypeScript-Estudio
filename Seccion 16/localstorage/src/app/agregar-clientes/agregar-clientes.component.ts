import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../models/Clientes';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  formulario: FormGroup;
  cliente: Clientes;
  constructor(private formBuilder: FormBuilder, private clienteService: ClientesService) { 
    this.cliente = new Clientes();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  agregar(){
    this.cliente = this.formulario.value as Clientes;
    this.clienteService.agregarLocalStorage(this.cliente);
    this.formulario.reset();
  }
}
