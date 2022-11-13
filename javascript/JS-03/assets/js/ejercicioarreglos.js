let nombre = prompt("Ingrese una palabra");

function reverse(nombre) {
    return nombre.split("").reverse().join("");
}
document.write(reverse(nombre));


/* let nombre = String(prompt("¿Cúal es la palabra?"));


function reverse(s){
    return s.split("").reverse().join("");
}

var sss = reverse(nombre);
document.write(sss); */
