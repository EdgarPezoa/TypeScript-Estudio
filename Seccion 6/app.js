var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Alumno.prototype.mostrarNombre = function () {
        this.funcionPrivada();
        return this.nombre + this.apellido;
    };
    Alumno.prototype.funcionPrivada = function () {
        console.log("funcion privada");
    };
    return Alumno;
}());
var alumno = new Alumno("Edgar", "Pezoa", 23);
console.log(alumno.mostrarNombre());
alumno.mostrarNombre;
