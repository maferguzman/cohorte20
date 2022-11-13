class operacionesAritmeticas{
    numero0 = 0;
    numero1 = 0;

    constructor (valor0, valor1){
        this.numero0 = valor0;
        this.numero1 = valor1;
    }

    sumar(a, b){
        return a + b;
    }
}

/*PASOS DE LA INSTANCIA: declarar objeto, crear el objeto y hacer la instancia
let obj1;
obj1 = new operacionesAritmeticas();
obj1.sumar(2,6);*/

let obj1;
obj1 = new operacionesAritmeticas(8,6); 

console.log(obj1.numero0);
console.log(obj1.numero1);
console.log('obj1: ' + obj1.sumar(obj1.numero0,obj1.numero1));

let obj2 = new operacionesAritmeticas();
console.log(obj2.sumar(5,6));