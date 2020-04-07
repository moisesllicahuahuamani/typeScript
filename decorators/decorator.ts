//decorator implementado a metodo
//primero creamos una clase y a esta clase le vamos a poner un decorador "para usar deocradores se deve anteponer @", que basicamente es una funcion que hace instancia ala clase
//en ejemplo vemos la funcion decolog que tiene dos parametro target => hace referencia ala clase donde se le llama y key => hace 
//hace referencia al elemnto dentro de la clase presisamente myName. Esto se cumplira siempre en un decorador hay dos parametros 
//target y key, asi en la funcion de nuestro decorador podemos poner la logica que se nos ocuarra.
function DecoLog (target, key){
console.log(key + 'se a llamado')
}

class Persona {
    private nombre: string;
    constructor(nombre: string){
this.nombre = nombre;
    }
    @DecoLog myName(){
        console.log(this.nombre);
    }
}
const persona: Persona = new Persona('moises');
persona.myName(); // moises, // myName se a llamado
