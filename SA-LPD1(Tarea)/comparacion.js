const a = parseInt(prompt("Ingrese el primer valor"))
const b = parseInt(prompt("Ingrese el segundo valor"))
const c = parseInt(prompt("Ingrese el tercer valor"))

function ordenarNum() {
    if (a >= b && a >= c && b >= c) {
        console.log(a, b, c);
        console.log(c, b, a);
    } else if (a >= b && a <= c && b <= c) {
        console.log(a, c, b);
        console.log(b, c, a);
    } else if (a <= b && a >= c && b >= c) {
        console.log(b, a, c);
        console.log(c, a, b);
    } /* else if (a >= b && a >= c && b <= c) {
        console.log(c, a, b)
        console.log(b, a, c)
    }  */else if (a <= b && a <= c && b >= c) {
        console.log(b, c, a);
        console.log(a, c, b);
    } else if (a <= b && a <= c && b <= c) {
        console.log(c, b, a)
        console.log(a, b, c);
    } else {
        console.log("Intenta con otros valores")
    }
}
ordenarNum()

function numRepetidos() {
    if (a === b || a === c || c === b) {
        console.log("Los numeros que ha ingresado se repiten")
    } else {
        console.log("Estos son sus resultados")
    }
}
numRepetidos()
