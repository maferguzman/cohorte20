let numeros = []; 
for(let i = 0; i < 3; i++) {
    numeros [i] = parseInt(prompt(`Ingrese un numero entero positivo \nUsted esta ingresando el valor ${i + 1} de 3`));  
    
    numeros.sort((x, y) => x - y);     
}

alert(`En orden de menor a mayor: ${numeros}`);

