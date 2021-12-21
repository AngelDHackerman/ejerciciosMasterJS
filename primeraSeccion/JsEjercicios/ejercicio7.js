'use strict'

/* 
  Tabla de multiplicar del numero introducido
*/

let numero = parseInt(prompt(`Introduce el numero a multiplicar`, 1));

while ( isNaN(numero) ) { 
  numero = parseInt(prompt(`Introduce un numero valido!`));
};

document.write( `<h2>Tabla del ${numero}</h2>` )

for (let index = 1; index <= 10; index++) {
  document.write( `${index} x ${numero} = ${index * numero}<br/>` );
};
document.write(`<br/>`);

//Todas las tablas de multiplicar 

//debugger

for (let index2 = 1; index2 <= 20; index2++) {
  let contador = 0;

  document.write(`<h1>tabla del ${index2}</h1>`);

  for (let i = 1; i <= 10; i++) { 
    contador++;
    document.write( `${index2} x ${contador} = ${index2 * contador}<br/> ` );
  };
};