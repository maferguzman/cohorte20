let celsius = parseInt(prompt('Ingrese la temperatura en °C ')); 

isNaN(celsius); //comprueba si --celsius-- no es un número, regresa un true o false
//si es falso = enviar mensaje: 'Ingrese unicamente números'
//si es verdadero = continuar con las conversiones a farenheit y kelvin

let farenheit = (celsius * 9) / 5 + 32; //formulas
let kelvin = celsius + 273.15;

console.log(`Grados Farenheit: ${farenheit}`);
console.log(`Grados Kelvin: ${kelvin}`);