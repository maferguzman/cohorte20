//class Persona extends Object
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre; //usa guion bajo para que Javascript sepa que es un miembro de datos completamente diferente al parametro que esta pasando en el constructor
        this._apellido = apellido;
    }
    set nombre(nombre){
        this._nombre = nombre; //"_nombre" pertenece a metodo/miembro de datos de la clase / "nombre" es un parametro
    }
    set apellido(apellido){
        this._apellido = apellido;
    } 
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

//La clase empleado es una clasificacion abstracta de "persona"
class Empleado extends Persona{
    constructor(nombre,apellido,empresa){
        super(nombre,apellido);
        this._empresa = empresa;
    }
    set empresa (empresa){
        this._empresa = empresa;
    }
    get empresa (){
        return this._empresa;
    }      
}

let p1 = new Persona('Hugo', 'Sanchez');
console.log(p1.nombreCompleto());
console.log(p1.toString());

let E1 = new Empleado('Juan', 'Perez', 'Coppel');
console.log(E1.nombreCompleto() + ' ' + E1._empresa);

console.log(E1.toString());

/*
class Persona {

    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto () {
        return this._nombre + ' ' +this._apellido;
    }     
}

class Empleado extends Persona{
    constructor(nombre,apellido,empresa){
        
        super(nombre,apellido);
        this._empresa = empresa;
    }
    set empresa (empresa){
        this._empresa = empresa;
    }
    get empresa (){
        return this._empresa;
    }    
}

let p1 = new Persona('Hugo', 'Sanchez');
console.log(p1.nombreCompleto());

let E1 = new Empleado('Juan', 'Perez', 'coopel');

console.log(E1.nombreCompleto() + ' ' + E1._empresa);
*/
