'use strict'

/* 
  Escribe un programa que nos pida 2 numeros y que nos diga:
  cual es mayor, cual es menor y si son iguales.
  PLUS: Si los numeros no son numeros o son menores o iguales que 0, nos los vuelvan a pedir
*/

let numero1 = parseInt(prompt(`Escribe el primer numero`, 0));
let numero2 = parseInt(prompt(`Escribe el segundo numero`, 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt(`Escribe el primer numero`, 0));
  numero2 = parseInt(prompt(`Escribe el segundo numero`, 0));    
}

if (numero1 > numero2) {
  console.log(`El primer numero (${numero1}) es MAYOR que el segundo (${numero2})`);
} else if (numero1 < numero2) { 
  console.log(`El segundo numero (${numero2}) es MAYOR que el primero (${numero1})`);
} else if (numero1 == numero2) { 
  console.log(`Ambos numeros son iguales`);
} else { 
  console.log(`Eso no es un numero!!!`);
}

