//union type
//union en terminos matematicos vemdria a ser "o","^","or","|" a una variable se le puede tipar con mas de un tipo, como se hace acontinuacion
type SumaParamatro = string | number;
type SumaReturnType = string | number;
function Suma(num1: SumaParamatro, num2: SumaParamatro): SumaReturnType {
    return String(num1) + num2;
}

interface interface1 {
    prop1: number;
}
interface interface2 {
    prop2: number;
}
// del mismo modo con una variable que tiene dos interface.
type InterfaceMix = interface1 | interface2;

const interfaceMix: InterfaceMix = {
    prop1: 1,
    prop2: 2,
}