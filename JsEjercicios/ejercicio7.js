'use strict'

/* 
  Tabla de multiplicar del numero introducido
*/

let numero = parseInt(prompt(`Introduce el numero a multiplicar`));

while ( isNaN(numero) ) { 
  numero = parseInt(prompt(`Introduce un numero valido!`));
}

for (let index = 1; index <= 10; index++) {
  let contador ;
  contador = numero * index;
  document.write( `<p>${contador}</p>` )
}