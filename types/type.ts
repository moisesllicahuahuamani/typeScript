let a= 'hola';
a = 'holas';
a = 2;
//el visual studio code nos identifica que el valor
//asignado a "a", es incoreecto ya que esta tipado
//como un string = "letra, o palabra"
 
let b: number = 10;
b= a;
b = 20;
b = 10 + 10;
// linea 9 nos da error ya que b este tipado de tipo 
//numero, asi mismo se puede ver qeu se puede reasignar 
//un valor para la variable multiples veces y de formas
//distintas

const num1 = 10;
const num2 = 20;
b = num1 + num2;
//linea 19 despues de crear dos variables distintas se 
//demuestra que tambien se puede hacer operaciones con 
//las variables sin ningun error.

function suma(num1, num2){
    return num1 + num2;
}
let anyValue: any = 10;
anyValue = 'hola'
//en la funcion creada dentro de () esta los parametros que 
//recive una funcion y dentro de {} esta la operacion que se
//ejecutara con los parametros recividos.
 //cuando la constante se tipa con any, es por que no se 
 //que valor resivira.
 function sumas(num1:number, num2:number):number{
     return num1 + num2;
 }
 // Type Inference
 //tambien es posible tipar la salida de la funcion en este 
 //caso de tipo number ya que asi nos aseguramso que el resulatado
 //siempre sera de tipo numero.

 type dni = number;
 let dniNumber: dni = 123;
 let dninumber1: dni = 456;
//Type Keyword
//si ala variable "dni" que puede ser cualquier nombre se tipa
//y esta variable se puede usar para tipar otras varibales de este 
//modo si se quiere hacer una cambio en la recepcion de tipo en la 
//variable en un programa donde usar por todo lado, al cambiar en 
//en la variable que tipa a los demas cambias rrapidamente y sin error.




