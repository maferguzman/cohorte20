// == operador comparación
// === comparación estricta

let edad = Number(prompt("¿Cuál es tu edad?"))

if (edad > 0 && (edad <= 17)){
    document.write("Tas chiquito");
} else if (edad === 18){
    document.write("Ya puedes votar :)");
} else if (edad > 18){
    document.write("Tas adulto");
} else if (edad < 0){
    document.write("Es un número negativo");
} else {
    document.write("Eso no es un número");
}

/* No se recomienda hacer estructuras demasiado 
grandes con else if porque puede llegar a hacer lenta 
la ejecución del programa*/