/* const calculadora = require ('../calculadora');
test ('test suma', () => {
    const r = calculadora.suma(1, 2) QUE QUIERO PROBAR + parametros()
    expect (r).toBe(3) EXPECT TO BE resultado
    expect (r).toBe(4) FALLA LA PRUEBA
}) 
//SEGUNDA FORMA
import { indexTest } from '../calculadora';

test ('test suma', () => {
    const r = indexTest.suma(1, 2) que quiero probar + parametros()
    expect (r).toBe(3) expect to Be resultado
})
//toDo sirve para planear las siguientes pruebas, en espera de poderlas hacer
test.todo('test de resta');
test.todo('test de mult');
test.todo('test de divide');*/

//TERCERA OPCION UNA FUNCION NO UN OBJETO
const indexTest = require ('../calculadora');

test ('test suma', () => {
const r = indexTest.suma(1,5)
expect (r).toBe(6);
});
