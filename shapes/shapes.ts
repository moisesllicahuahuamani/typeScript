//shapes
//se crearon dos clases, clase Alumno es la extencion de clase Persona, se crean dos variables de tipo let y ambas son credas con sus
//propios datos, al realizar la operacion de igualdad se ve claramente que que el alumno puede ser una persona pero una persona no
//necesariamente es un alumno y esto es shapes.
class Persona {
    private edad: number;
    private nombre: string;
    private dni: number;
    constructor(edad: number, nombre: string, dni: number){
        this.edad = edad;
        this.nombre = nombre;
        this.dni = dni;
    }
}
 class Alumno extends Persona {
private matricula: string;
constructor(edad: number, nombre: string, dni: number, matricula: string){
super(edad, nombre, dni);
this.matricula = matricula;
}
 }
 
 let persona: Persona = new Persona(21,'carlos', 68592364);
 let alumno: Alumno = new Alumno(25, 'pedro', 5897564, 'M001');

persona = alumno;
alumno = persona;