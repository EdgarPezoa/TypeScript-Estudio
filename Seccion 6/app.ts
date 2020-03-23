class Alumno{
    private nombre: string;
    private apellido: string;
    private edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrarNombre():string{
        this.funcionPrivada();
        return this.nombre+ this.apellido;
        
    }
    private funcionPrivada():void{
        console.log("funcion privada");
    }
}

var alumno: Alumno = new Alumno("Edgar", "Pezoa", 23);
console.log(alumno.mostrarNombre());
alumno.mostrarNombre