
// decorator implementado a propiedades 
// para extender la funcionalidad de una propiedad se coloca @logProperty antes de la propiedad name, y modificamos el get y set 
// redefiniendo la propiedad de nuestos objetos.
function logProperty(target, key){
let _val = this[key];
const getter = () => {
console.log(`Get: ${key} => ${_val}`)
return _val;
}
const setter = (newValue) => {
console.log(`Set: ${key} => ${newValue}`);
_val = newValue;
}
const objectProperty = {
    get: getter,
    set: setter
}
Object.defineProperty(target, key, objectProperty)
//de esta manera estomos creando una nueva propiedad en nuestro decorador llamado objectProprety que tiene dos estados set y get
}
class Persona {
    @logProperty
    public name: string;
    constructor(name: string){
        this.name = name;
    }
}
const persona = new Persona('moises');
persona.name = 'david'; //setter // set: name => 'david'
const nameClass = persona.name;//getter // get: name => 'david'