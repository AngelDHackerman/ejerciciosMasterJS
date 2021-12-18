'use strict'

/* 
  muestra todos los numeros impares que esten entre 2 numeros introducidos por el teclado.
*/

let numeroInicial = parseInt(prompt(`Escribe el primer numero`, 0));
let numeroFinal = parseInt(prompt(`Escribe el segundo numero`, 0)); 

while (isNaN(numeroInicial) || isNaN(numeroFinal)) {
  numeroInicial = parseInt(prompt(`Escribe el primer numero`, 0));
  numeroFinal = parseInt(prompt(`Escribe el segundo numero`, 0));    
}

document.write(`Los numeros introducidos fueron ${numeroInicial}, ${numeroFinal}`);


if (numeroInicial < numeroFinal) { 
  for (let index = numeroInicial; index < (numeroFinal - 1); index++) {
    numeroInicial++;

    if (numeroInicial % 2 != 0 ) { 
      document.write(`<h2>${numeroInicial}</h2>`);
    };

  };
} else if ( numeroInicial > numeroFinal) { 

  for (let index = numeroInicial; index > (numeroFinal + 1); index--) {
    numeroInicial--;
    if (numeroInicial % 2 != 0) {
      document.write( `<h2> ${numeroInicial}</h2>`)
    }
  };
} else if (numeroInicial == numeroFinal) { 
  console.log(`${numeroInicial} y ${numeroFinal} son iguales`);
}
