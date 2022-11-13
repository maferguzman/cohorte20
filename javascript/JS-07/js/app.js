const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("parrafo");

titulo.textContent = "Hola"
parrafos[0].innerHTML = "Soy un parrafo"

console.log(titulo.textContent);
console.log(parrafos[1].textContent);

// css background-color -- snake case
// js backgroundColor -- camelCase

parrafos[1].style.color = "red";
parrafos[1].style.backgroundColor = "yellow";

parrafos[1].classList.add("coloresFeos")

//Crear elementos HTML
const padre = document.getElementById("padre")

const enlace = document.createElement("a");
enlace.href = "https://google.com"
enlace.textContent = "Google"
//Muestra todo el contenido en la consola document.body
/* document.body.appendChild(enlace);

document.body.insertAdjacentElement("beforeend", enlace); */

padre.appendChild(enlace);

console.log(document.body);