let entrada = parseInt(prompt('Ingrese un número entero positivo'));

//Formula: n! = n * (n-1)
function factorial(entrada) {
    if (entrada === 0 || entrada === 1) { //si el numero a factorizar es 0 o 1...
      return 1; //...el resultado siempre será 1
    }
    for (let i = entrada - 1; i >= 1; i--) { 
      entrada *= i; 
    } 
    return entrada; 
  }
 alert(`El factorial de ${entrada} es ${factorial(entrada)}`);

 