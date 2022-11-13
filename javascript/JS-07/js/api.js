/* const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar(); second
foo(); first
baz(); third

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 2000);
const baz = () => console.log("Third");

bar();
foo();
baz(); 
Use google debbugger
*/

/* const nombre = () => {
    const nombres = ["Pepe", "Pancho", "Maria"];

    setTimeout(() => {
        return nombres;
    }, 3000); //puede ser 1 o 0
Aparece undefined porque se tarda en ejecutarse y el compilador junta 
lo que es más rápido y ya después lo que se detiene. Si el compilador lee setTimeOut 
todo se detiene. setTimeOut detiene la ejecución.
}
console.log(nombre()) 

setTimeout(function() {
    console.log("He ejecutado la función");
  }, 5000); //5 segundos */

  const url = "https://pokeapi.co/api/v2/pokemon/1"

  const pokedex = () => {
    fetch(url)
    .then((datos) => datos.json()) //da la instruccion para obtener los datos
    .then((pokemon) => console.log(pokemon)) // recibe la informacion ya modificada
    .catch(error => console.log(error))
  };

  pokedex();