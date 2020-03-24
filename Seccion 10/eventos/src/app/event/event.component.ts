import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.email);
    console.log(this.password);
  }
  
  darAlerta(){
    alert("Haz echo doble click");
  }

  escribirCorreo(){
    console.log(this.email);
  }

  escribirPassword(){
    console.log("Cambio la contraseña");
    this.email = this.password;
  }

  escribir(event){
    console.log(event.target.value);
  }

  colorearFondo(event){
    event.srcElement.style.background = "red";
    event.srcElement.style.width = "1000px";
  }

  ingresarKeyDown(event){
    if(event.key == "Enter"){
      console.log("Ingresando al sistema");
    }
  }

  cambiarSize(event){
    event.srcElement.style.width = "500px";
    event.srcElement.style.height = "500px";
    event.srcElement.style.border = "1px solid red";
  }

  restablecerSize(event){
    event.srcElement.style.width = "300px";
    event.srcElement.style.height = "300px";
    event.srcElement.style.border = "none";
  }
}
