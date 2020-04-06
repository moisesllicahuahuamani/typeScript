//interseccion type
//del mismo modo qeu el ejercicio de union type, inetrseccion matematicamente es representado por "y","and","&" y quiere decir que las 
//variables incluidas en nuetra interface devera cumplir si o si al momento de tiparla con muetra interfaceMix de otro modo nos sale 
//error.
interface Interface1 {
    prop1: number;
}
interface Interface2 {
    prop2: number;
}
type InterfaceMix = Interface1 & Interface2;

const interfaceMix: InterfaceMix = {
prop1: 1,
prop2: 2
}

