let entrada = parseInt(prompt('pase un numero'));

const inicio = [0, 1]; //estos siempre se imprimen, estos valores no salen con la formula


for (let n = 2; n < entrada; n++) {
    inicio.push(inicio[n] = inicio[n - 1] + inicio[n - 2]);
}
alert(inicio);


