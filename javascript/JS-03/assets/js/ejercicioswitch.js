/* Escribir un programa que detecte el cupón que tiene el usuario
Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%
-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un cupón equivocado  */

let precio = Number(prompt("¿Cuál es el precio de su producto?"));
let cupon = prompt("¿Qué tipo de cupón tiene?");

switch(cupon){
    case "Bronce": 
        Bronce = (precio * .95);
        ahorro = precio - Bronce
        document.write("Precio original " + precio, "<br>Precio con descuento " + Bronce, " <br>Usted ahorro $", ahorro);
        break;
    case "Plata":
        Plata = (precio * .90);
        ahorro = precio - Plata
        document.write("Precio original " + precio, "<br>Precio con descuento " + Plata, " <br>Usted ahorro $", ahorro);
        break;
    case "Oro":
        Oro = (precio * .80);
        ahorro = precio - Oro
        document.write("Precio original " + precio, "<br>Precio con descuento " + Oro, " <br>Usted ahorro $", ahorro);
        break;
    case "Platino":
        Platino = (precio * .75);
        ahorro = precio - Platino
        document.write("Precio original " + precio, "<br>Precio con descuento " + Platino, " <br>Usted ahorro $", ahorro);
        break;
    default:
        document.write("El cupón no es válido :(")
        break;
}

