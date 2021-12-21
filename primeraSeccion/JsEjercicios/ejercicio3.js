'use strict'

/* 
  hacer un programa que muestre todos los numeros que hay entre 2 numeros introducidos por el 
  usuario.
*/

let numeroInicial = parseInt(prompt(`Escribe el primer numero`, 0));
let numeroFinal = parseInt(prompt(`Escribe el segundo numero`, 0)); 

while (isNaN(numeroInicial) || isNaN(numeroFinal)) {
  numeroInicial = parseInt(prompt(`Escribe el primer numero`, 0));
  numeroFinal = parseInt(prompt(`Escribe el segundo numero`, 0));    
}

console.log(`${numeroInicial}`);
console.log(`${numeroFinal}`);


if (numeroInicial < numeroFinal) { 
  for (let index = numeroInicial; index < (numeroFinal - 1); index++) {
    numeroInicial++;
    console.log(numeroInicial);
  };
} else if ( numeroInicial > numeroFinal) { 

  for (let index = numeroInicial; index > (numeroFinal + 1); index--) {
    numeroInicial--;
    console.log(numeroInicial);
  };
} else if (numeroInicial == numeroFinal) { 
  console.log(`${numeroInicial} y ${numeroFinal} son iguales`);
}

