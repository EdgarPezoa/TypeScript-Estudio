function holaMundo(){
    console.log("Hola mundo");
}

function mostrarMensaje(mensaje:string){
    console.log(mensaje);
}

function mensajeConcatenado(mensaje1:string, mensaje2:string):string{
    let mensaje:string = mensaje1 + mensaje2;
    return mensaje;
}

holaMundo();
mostrarMensaje("Funciones con parametros");
console.log(mensajeConcatenado("Hola", "Mundo"));