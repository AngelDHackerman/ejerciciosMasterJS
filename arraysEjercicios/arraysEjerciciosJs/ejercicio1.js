'use strict'

/* 
  Hacer un programa que: 
  1) pida 6 numeros por pantalla y los meta en un array 
  2) mostrar todos sus elementos en el cuerpo de la pagina y en la consola.
  3) tambien ordernarlo y mostrarlo.
  4) invertir su orden y mostrarlo.
  5) mostrar cuantos elementos tiene el array. 
  6) hacer una busqueda de un valor introducido por el usuario, y que nos diga si esta en el array y su indice
*/

let numeros = [];


for (let index = 0; numeros.length < 5 ; index++) { 
  let valores = parseInt(prompt(`Introduce tu numero`));
  numeros.push(valores);
};

console.log(numeros);



