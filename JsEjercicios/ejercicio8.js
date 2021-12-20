'use strict'

/* 
  Calculadora: 
  -Pida 2 numeros por pantalla,
  -Si metemos uno mal que nos los vuelva a pedir,
  -En el cuerpo de la pagina, en una alerta y por la consola que nos muestre el resultado de: 
    sumar, restar, dividir y multiplicar esas 2 cifras. 
*/

let numero1 = parseInt(prompt(`Introduce el 1er numero`));
let numero2 = parseInt(prompt(`Introduce el 2do numero`));

while (isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt(`Introduce el 1er numero, pero que sea valido.`));
  numero2 = parseInt(prompt(`Introduce el 2do numero, pero que sea valido.`));
}

document.write(`Estos fueron los numeros optenidos: ${numero1} & ${numero2}</br>`);

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

document.write(`La suma es: ${suma} </br>`);
document.write(`La resta es: ${resta}</br>`);
document.write(`La multiplicacion es: ${multiplicacion}</br>`);
document.write(`La division es: ${division}</br>`);

alert(`Suma ${suma}`);
alert(`Resta ${resta}`);
alert(`Multiplicacion ${multiplicacion}`);
alert(`Division ${division}`);

console.log(`suma= ${suma}`);
console.log(`resta= ${resta}`);
console.log(`multiplicacion= ${multiplicacion}`);
console.log(`division4= ${division}`);

