let x = 10;
console.log(x);

/*Objeto de instancia con new, conforme lo vas implementando lo vas definiendo
let persona1 = new Object();
persona1.edad = 23;
console.log(persona1);
console.log(persona1.edad); */

//Objeto literal
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){
        return "El nombre es " + this.nombre + "" + this.apellido; //this -- palabra reservada para acceder al mismo objeto
    }
}

for (nombrePropiedad in persona){
    console.log("atributos");
    console.log(nombrePropiedad);
    console.log("valor" + persona[nombrePropiedad]);
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona["apellido"]);
persona.tel = "55123789";
console.log(persona);
console.log(persona.tel);
//delete persona.tel  --para eliminar el atributo
//delete persona.nombreCompleto
console.log(persona);
let personaArreglo = Object.values(persona);

