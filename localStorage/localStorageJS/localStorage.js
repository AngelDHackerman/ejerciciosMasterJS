'use strict'
window.addEventListener('load', () => { 

        //Agregar las peliculas

let formularioPeliculas = document.querySelector('#formPeliculas');

formularioPeliculas.addEventListener('submit', () => { 
  let titulo = document.querySelector('#addPelicula').value; //Asi entramos al valor que tenga escrito el input
  if (titulo.length >= 1) { 
    localStorage.setItem(titulo, titulo);
  }
});

let listadoPeliculas = document.querySelector('#peliculasList');

for (let indice in localStorage) {      //Asi mostramos lo que esta en el localStorage
  if (typeof localStorage[indice] == 'string') { 
    let li = document.createElement('li');
    li.append(localStorage[indice]);
    listadoPeliculas.append(li);
  }
};

          //Eliminar las peliculas

let formularioBorrarPeliculas = document.querySelector('#formBorrarPelicula');

formularioBorrarPeliculas.addEventListener('submit', () => { 
  let titulo = document.querySelector('#rmvPelicula').value; //Asi entramos al valor que tenga escrito el input
  if (titulo.length >= 1) { 
    localStorage.removeItem(titulo);
  }
});















})