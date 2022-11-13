let miVariable=prompt('¿Cuál es tu nombre?');

function saludoPer(){
    alert(miVariable);
}
function suma(){
    let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let resultado = num1 + num2;
    return resultado
}
alert(suma());

function resta(){
    let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let resultado = num1 - num2;
    return resultado
}
alert(suma());

function multiplicacion(){
    let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let resultado = num1 * num2;
    return resultado
}

function division(){
    let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let resultado = num1 / num2;
    return resultado
}

function residuo(){
    let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let resultado = num1 % num2;
    return resultado
}

function adicionales(){
    let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    let resultado = ++num1;
    return resultado
}
console.log('El resultado de esta operación:' + adicionales());

function edad(){
    let miEdad = 18;
    if (miEdad >= 18){
        console.log('Eres mayor de edad.');
    }
        else{
console.log('No eres mayor de edad.')}
}
edad()

function conjuncion(){
    let valor1 = true;
    let valor2 = true;
    if(valor1 && valor2){
        console.log('El valor1 y el valor 2 son verdaderos.');
    }
    else {
        console.log('Un valor es falso.');
    }
}
conjuncion();

function disyuncion(){
    let var1 = false;
    let var2 = false;
    if(var1 || var2){
        console.log('El operador OR es verdadero.');
    }
    else{
        console.log('El operador OR es falso.');
    }
}
disyuncion();

function negacion(){
    let var1 = true;
    if(!!var1){
        console.log('El valor es ' + var1);
    }
    else{
        console.log('El valor negado es ' + var1);
    }
}
negacion();