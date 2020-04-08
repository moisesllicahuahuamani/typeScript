//decorator implementado a parametros
//vemos dos nuevos parametro en nuestra funcion decoradora index = posision del parametro, propertyName = nombre de nuestra propiedad a donde 
//appunta nuestro ddecorador  
function logParameter(target, propertyName , index){
const metadataKey = `LOG_${target}_parameter`;
if(Array.isArray(target[metadataKey])){
target[metadataKey].push(index)
}else{
    target[metadataKey] = [index]
}
}

class P {
    greet(@logParameter message: string): string{
        return message;
    }
}
const p = new P();
p.greet('hola');