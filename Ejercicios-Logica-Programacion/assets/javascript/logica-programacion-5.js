let adivina = Math.floor(Math.random() * 101); 

let intentos = []; 

console.log(adivina); //PRUEBA, por si después de varios intentos no adivina puede ver el número correcto en la consola

let adivinador;

do {
    intentos.push(adivinador = parseInt(prompt('Ingrese un numero entre 1 y 100')));
  }
  while (adivina != adivinador); 

alert(`Eres un gran adivino\nTus intentos: ${intentos}`);
