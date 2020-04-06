//interface
//creamos el interface con un nombre y dentro de ello las variables que serviran para hacer un contrato con varible cualquiera, entendemos
//por contrato que dicha variable puede coumplir o no lo que le dice nuestro interfece, para que cumpla todas las condiciones tipado no se
//poner el signo "?" al final pero si se quiere algo mas flexible usar el signo "?" despues de cada variable dentro de nuestro interface
//esto resulta en que al tipar nuetra variable user1 podemos o no colocar como ahora dni y no nos bota un error pero si no usaramos "?" 
//nos saldria un error ya que no estaria cumpliendo el contrato.
type dni = string;
interface usuario {
    nombres?: string;
    apellidos?: string;
    correo?: string;
    direccion?: string;
    edad?: number;
    dni?: dni;
}
const user1 : usuario = {
nombres: 'Pedro',
apellidos: 'Delos Palote',
correo: 'pedrodelos@gmail.com',
direccion: 'av. las palabras',
edad: 30
}