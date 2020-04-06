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