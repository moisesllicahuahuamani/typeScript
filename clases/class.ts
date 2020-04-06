// observemos y analizemos este pedazo de codigo, primero la composicion de una clase seri ala sigueiente
//class "nombre"{
//   constructor(){
//    }
//   }
class Trasporte {
    private velocidad: number;
    private formaDeMobilidad: string;
// fuera del constructor podemos declarar variables de tipo private = "privadas" y public = "publicas", las privadas solo se podran usar
//dentre de esta classe y las publicas se pueden usar llamandolos directamente desde cualquier parte del programa.
constructor(ParametroVelocidad: number, ParametroFormaDeMobilidad: string) {
    this.velocidad = ParametroVelocidad;
    this.formaDeMobilidad = ParametroFormaDeMobilidad;
//para entrar al constructor se le envia parametros dentro de las parebtecis como ya habiamos visto anteriormente, el contrunstructor nos
//indica la frorma que tendra cuando querramos usarlo en otra variable. Continuando vemos como usando this."variable", 
//podemos llamar alas variables que se creo anteriormente para decirles que el parametro que creamos dentro de los parentecis sera tipado
//como esta variable,(this) es una apuntador y lo usaremos vastante.
}
//despues fuera del constructor podemos hacer todo lo que se nos ocurra en este caso tenemos algunas funciones con tipados similares
//(return) nos indica dentro de una funcion que es lo que se va sacar fuera, es decir que nos retornara esta funcion cuando se la llame 
getVelocidad(){
    return this.velocidad  
}
setVelocidad(Pvelocidad: number){
    this.velocidad = Pvelocidad;
//Aqui tambien podemos nombrar parametros nuevos y tiparlos del mismo modo con la variable que se creo como privada al inio, esto es 
//completamente normal ya que seguimos viviendo dentre de clase 
}
getFormaDeMobilidad(){
    return this.formaDeMobilidad
}
setFormaDeMobilidad(PformaDeMobilidad: string){
    this.formaDeMobilidad = PformaDeMobilidad;
}
}
//Finalmente vemos como podemos llamar ala clase creada para tipar igualando esta clase a una variable, asi nos aseguramos que los
//valores que resivira nuestra ultima variable sera un tipo numero y un tipo texto.
const ultimaVariableTransporte: Trasporte = new Trasporte(10, 'terrestre');



//