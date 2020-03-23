// IF, ELSE y ELSE IF
// var bandera:boolean = false;
// var contrario:boolean = false;
// var numero:number = 10;
// if(bandera){
//     console.log("Es verdadero");
// }else{
//     console.log("Es falso");
// }
// if(numero>5){
//     console.log("el numero es mayor a 5");   
// }else if(numero < 10){
//     console.log("el numero es menor a 10");
// }
// if(!contrario){
//     console.log("Es falso");
// }
// SWITCH y ENUM
// var numero:number = 10;
// enum tipoMenu{
//     rock = 1,
//     pop = 5,
//     electronica = 10
// }
// switch (numero) {
//     case tipoMenu.rock: {
//         console.log("Variable numero es ROCK");
//         break;
//     }
//     case tipoMenu.pop:
//         console.log("Variable numero es POP");
//         break;
//     case tipoMenu.electronica:
//         console.log("Variable numero es ELECTRONICA");
//         break;
//     default:
//         console.log("Valor de switch por defecto, No era ningun nuemro del caso");
//         break;
// }
// TERNARIO
// var numero:number = 10;
// var nombre:string;
// if(numero > 2){
//     nombre = "Edgar";
// }else{
//     nombre = "José";
// }
// nombre = numero > 2 ? "Edgar" : "José";
// console.log(nombre);
// DEBUGGER
var bandera = true;
if (bandera) {
    debugger;
    console.log("Dentro de bandera");
}
