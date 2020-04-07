//decorator inplementado a class
//tenemos una function init con el parametro target que senala a class, y pues hacemos una extension de class se crean variables y se 
//modifican el elemento myname, senalamos nuestro de corador ala class
function init(target){
return class extends target {
    nombre = 'moises';
    apellido = 'llicahua';

    myName(){
        return `${this.nombre} ${this.apellido}`
    }
}
}

@init class P {
    constructor(){

    }
    myName(){

    }
}

const p: P = new P();
console.log(p.myName());
//moises llicahua