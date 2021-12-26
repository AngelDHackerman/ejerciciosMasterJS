'use strict'

/* 
  Hacer un programa que: 
  1) pida 6 numeros por pantalla y los meta en un array                           ok
  2) mostrar todos sus elementos en el cuerpo de la pagina y en la consola.       ok
  3) tambien ordernarlo y mostrarlo.                                              ok
  4) invertir su orden y mostrarlo.                                               ok
  5) mostrar cuantos elementos tiene el array.                                    ok
  6) hacer una busqueda de un valor introducido por el usuario, y que nos diga si esta en el array y su indice
*/

      //Paso N.1 , 2

let numeros = [];

document.write(`<h1>Estos son los numeros ingresados:</h1>`);
for (let index = 0; numeros.length < 6 ; index++) { 
  let valores = parseInt(prompt(`Introduce tu numero`));
  numeros.push(valores);
  document.write(`<li>${valores}</li>`);
};

console.group(`Numeros en el orde original`);
  console.log(`Estos son los numeros del array:` , numeros);
console.groupEnd();

      //Aqui ordenamos y mostramos los numeros ingresados Paso N.3

let numerosOrdenados = [...numeros].sort((a, b) => b - a); /* con esta funcion anonima se ordean los numeros */
console.group(`Numeros ordenados`);
  console.log(`Array pero ordenado`, numerosOrdenados);
console.groupEnd();

document.write(`<h3> Listado de numeros ORDENADOS`);
numerosOrdenados.forEach(index => document.write(`<li> ${index}</li>` )); //con forEach hacemos que nos quede una lista vertical

      // Aqui los invertimos y los mostramos Paso N.4

let numerosInvertidos = [...numerosOrdenados].reverse();
console.group(`Numeros invertidos`);
  console.log(numerosInvertidos)
console.groupEnd();

document.write( `<h3>Numeros ordenados pero INVERTIDOS</h3>` );
numerosInvertidos.forEach(index => document.write(`<li> ${index}</li>` )); //con forEach hacemos que nos quede una lista vertical

      //Aqui mostramos cuantos elementos tiene el array Paso N.5

let numeroElementos = numeros.length;
console.group(`Numero de elementos en el array:`);
  console.log(numeroElementos);
console.groupEnd();

document.write( `<h3>Numeros de ELEMENTOS en el array</h3>` );
document.write( `<li>${numeroElementos}</li>` );

      //Aqui hacemos la busqueda del elemento y nos dice si existe, si asi es muestra su numero de indice. Paso N.6

const buscar = () => { 
  let numberToSearch = parseInt(prompt(`Que numero debemos buscar?`));
  const found = numeros.find(element => element == numberToSearch);

  
  if (found) {
    let indexOriginal = numeros.indexOf(found);
    let indexOrdered = numerosOrdenados.indexOf(found);
    let indexInverted = numerosInvertidos.indexOf(found);

    console.group(`Numero encontrado en el array (Recuerda comenzamos desde el 0)`);
      console.log( `Este es el numero buscado y encontrado: ${found}`);
      console.log( `Y su numero de indice en el array original es: ${indexOriginal}` );
      console.log( `Su numero de indice ya ordenado es: ${indexOrdered}` );
      console.log( `Su numero de indice con el array invertido es: ${indexInverted}` );
      console.groupEnd();

      document.write( `<h3>Index del ${found} en los diferentes Arrays: (Recuerda comenzamos desde el 0)</h3>` );
      document.write( `<li>N. de index de  en el array ORIGINAL: ${indexOriginal} </li>` );
      document.write( `<li>N. de index ORDENADO: ${indexOrdered} </li>` );
      document.write( `<li>N. de index INVERTIDO: ${indexInverted} </li>` );
  } else { 
    console.log(`El numeor ${numberToSearch} no existe en el array :(`);
    document.write( `<h3>El numero ${numberToSearch} existe en el array :( </h3>` )
  }
  
  
};
buscar();
