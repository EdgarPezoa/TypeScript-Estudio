function holaMundo() {
    console.log("Hola mundo");
}
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
function mensajeConcatenado(mensaje1, mensaje2) {
    var mensaje = mensaje1 + mensaje2;
    return mensaje;
}
holaMundo();
mostrarMensaje("Funciones con parametros");
console.log(mensajeConcatenado("Hola", "Mundo"));
