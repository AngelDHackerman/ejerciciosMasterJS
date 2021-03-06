'use strict'
window.addEventListener('load', () => {

let formulario = document.querySelector('#formulario');
let boxDashed = document.querySelector('.dashed');
boxDashed.style.display = 'none'; //  AQUI ESCONDEMOS LA OTRA CAJA EN EL HTML

formulario.addEventListener('submit', () => { 
  console.log(`Evento submit capturado`);
  let nombres = document.querySelector('#nombres').value; // .value saca lo que contiene ese campo
  let apellidos = document.querySelector('#apellidos').value;
  let edad = parseInt(document.querySelector('#edad').value);
  let submit = document.querySelector('#enviar').value;
  console.log(nombres, apellidos, edad, submit);

  if (nombres.trim() == null || nombres.trim().length == 0) {
    alert(`El nombre no es valido`);
    document.querySelector('#errorNombre').innerHTML = 'El nombre no es valido';

    return false; //Este return false IMPIDE que se muetre el resto del codigo y que no se muestre el cuadrito en la pantalla
  } else { 
    document.querySelector('#errorNombre').style.display = 'none';
  }

  if (apellidos.trim() == null || apellidos.trim().length == 0) {
    alert(`Los apellidos no son validos`);

    return false;
  }

  if(edad == null || edad <= 0 || isNaN(edad)) { 
    alert(`La edad no es valida`);

    return false;
  }
  
  boxDashed.style.display = 'block'; //AQUI MOSTRAMOS LA CAJA EN EL HTML

  let p_nombres = document.querySelector('#p_nombres span'); // aqui selecionamos el span dentro del ID 
  let p_apellidos = document.querySelector('#p_apellidos span');
  let p_edad = document.querySelector('#p_edad span');

  p_nombres.innerHTML = nombres;
  p_apellidos.innerHTML = apellidos;
  p_edad.innerHTML = edad;
  /* 
  let datosUsuario = [nombres, apellidos, edad];
  for (let indice in datosUsuario) { 
    let parrafo = document.createElement('p');//AQUI MOSTRAMOS LO DEL FORMULARION EN EL HTML
    parrafo.append(datosUsuario[indice]);
    boxDashed.append(parrafo);
  } 
  */

})















});