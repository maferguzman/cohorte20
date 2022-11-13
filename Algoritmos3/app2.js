const frutas = ["🍜", "espinacas", "leguminosas"];
console.log(frutas);

console.log(frutas.length);

 frutas.push("lima", "limon");
 console.log(frutas);

//unshift
 frutas.unshift("durazno");
 console.log(frutas);

 //pop
 frutas.pop();
 console.log(frutas);
 
 let elemento = frutas.pop();
 console.log(frutas);
 console.log(elemento);

//shift
let elemento2 = frutas.shift()
console.log(frutas);
console.log(elemento2);
console.log(frutas[0]);

//reverse
frutas.reverse();
console.log(frutas);

//sort  
frutas.sort();
console.log(frutas);

const numeros = [4, 123,4, 456, 4, 789, 10];
numeros.sort();
console.log(numeros);

//compara
numeros.sort((a,b) => a -b);
console.log(numeros);

numeros.sort(function order(a,b){return a-b});
console.log(numeros);

/* push(...items) agrega ítems al final,
pop() – extrae un ítem del final,
shift() extrae un ítem del inicio,
unshift(...items) agrega ítems al inicio.
splice(), slice()
concat() devuelve un nuevo array */

