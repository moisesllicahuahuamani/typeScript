// function types
// creamos tres variables tipadas para poder tipara nuestra funcion.
// le decimos que puede ser un erro o nulo
type callBackError = Error | null;
//aqui le decimo s que deve tener dos parametros (error, responce) y que retornara un void quiere decir que no habra un return
type callBack = (error: callBackError, responce: object) => void;
//aqui le damos un parametro cb tipado con la variablle anterior 
type sendRequest = (cb: callBack) => void;
//const nombre: tiparNombre (parametros):tiparFuncion {
//}
// siguiendo la estructura vemos como tipamos la funcion incandole lo typado anteriormente, para poder tipar la funcion se deve remplazar 
//fucntion por const, que ara las veces de funcion pero typado estrictamente.
const SendRequest: sendRequest = (cb: callBack): void => {
    if(cb){
        cb(null, {texto: 'todo salio como se pensaba'});
    }
}