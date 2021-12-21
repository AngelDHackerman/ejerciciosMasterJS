'use strict'

/* 
  Utilizando un bucle mostrar la media y la suma de los numeros introducidos 
  hasta introducir un numero negativo y  mostrar el resultado. 
*/

let suma = 0;
let contador = 0;
let numero = 0;
let media = 0;

do {
  numero = parseInt(prompt(`Introduce numeros hasta que metas uno negativo`, 0));

  if (isNaN(numero)) { 
    numero = 0;
  } else if (numero >= 0 ) {
    suma += numero;

    contador++;
  }

  console.log(`Valor actual de suma: ${suma}`);
  console.log(`Valor actual de contador: #${contador}`);

} while (numero >= 0);


console.log(`Esta es la suma total: ${suma}`);
console.log(`Esta es la media o promedio ${suma / contador}`);