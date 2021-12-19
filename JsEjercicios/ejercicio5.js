'use strict'

/* 
  Mostrar todos los numeros divisores de un numero introducido por pantalla
*/

let numero = parseInt(prompt(`Introduce tu numero`));

for (let index = 0; index <= numero; index++) {
  
  if (numero % index == 0) {
    document.write( `<p>${index}</p>`)
    console.log(index);
  }
  
}