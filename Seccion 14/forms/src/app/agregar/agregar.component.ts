import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario{
  nombre:string,
  correo:string,
  password:string
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formulario: FormGroup;
  usuarios: Array<Usuario> = new Array<Usuario>();
  esNuevo:boolean = false;
  poss:number = 0;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required ],
      correo: ['', Validators.compose([ Validators.required, Validators.email ])],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(8) ])]
    });
  }

  agregar(){
    this.usuarios.push(this.formulario.value as Usuario);
    this.formulario.reset();
  }

  editar(position:number){
    this.formulario.setValue(this.usuarios[position]);
    this.esNuevo = true;
    this.poss = position;
  }

  editarUsuario(){
    this.usuarios[this.poss] = this.formulario.value as Usuario;
    this.esNuevo = false;
    this.formulario.reset();
  }

  eliminar(position:number){
    this.usuarios.splice(position,1);
  }
}
