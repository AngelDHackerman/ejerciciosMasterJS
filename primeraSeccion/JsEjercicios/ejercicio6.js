'use strict'

/* 
  Programa que nos dice si un numero es par o impar
  1. ventana promt 
  2. Si no es valido que nos pida de nuevo el numero.
*/

let numero = parseInt(prompt(`Ingresa un numero valido`));

while (isNaN(numero)) { 
  numero = parseInt(prompt(`Eso no era un numvero valido, porfavor ingresa un numero valido`));
}

if ( numero % 2 == 0 ) {
  document.write( `<h2>El numero ${numero}, si es par.</h2>` )
} else if ( numero % 2 != 0 ) { 
  document.write( `<h2>El numero ${numero}, NO es par.</h2>` )
} 