//Forma 1 de crear elementos
//Llamar al contenedor
const imagen = document.getElementsByClassName("contenedor")[0];

//Crear el elemento
const nuevaImg = document.createElement("img");

//Modificar atributos
nuevaImg.src = "https://placeimg.com/200/200/nature";

nuevaImg.alt = "Imagen de naturaleza";

//Insertar el elemento
imagen.appendChild(nuevaImg);

//Otra forma de crear elementos
//Llamar al elemento padre Con ID no requieres crear una lista de elementos esta se va creando
const imagen2 = document.getElementById("img");

//Se interpreta como un elemento de HTML y se manda directamente
imagen2.innerHTML =  `<img src = "https://placeimg.com/200/200/animals" alt = "imagen de animales" />`;

//Crear una lista a partir de los elementos guardados en un arreglo
const nombres = ["Pedro", "Juan", "Sonia", "Miguel"];

let ul = getElementById("lista");
nombres.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;
    ul.appendChild("li");
})

//insertarla en el documento para que se pueda mostrar
