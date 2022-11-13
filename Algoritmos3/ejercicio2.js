const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);

personas.splice(1,1);
console.log(personas);
//Escribe un comando para remover a "Juan del arreglo"
personas.splice(2,1);
console.log(personas);
//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.splice(0,0,'Luis');
console.log(personas);
//Escribe el comando para agregar tu nombre al final del arreglo
personas.splice(4,0,'Mafer');
console.log(personas);
//Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf('Maria'));
//indexOf()

//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf('Mafer'));