"use strict";

let preguntas;
let preguntaActual = 0;
let contador = 0;
// let body = document.querySelector('body'); fuente: coding
let div = document.createElement("div");
div.setAttribute("id", "juego-container");
document.body.appendChild(div); //Nos hemos dado cuenta de que no funcionaba sin hacer primero un 'appenchild'. Fuente:Mariano, sesion1
let container = document.getElementById("juego-container");

fetch("/quiz.json")
  .then((response) => response.json())
  .then((data) => {
    preguntas = data;
    mostrarPregunta(); //Si no poníamos la función, no había forma de acceder al contenido de 'preguntas'. por qué?? por ser asíncrono?
  })
  .catch((error) => {
    console.error(error);
  });

// function mostrarPregunta() {
//     let pregunta = preguntas[preguntaActual];
//     let container2 = document.getElementById("juego-container");
//     let form = document.createElement('form', ['id="formulario"']);
//     let selectForm = getElementById('formulario');
//     let fieldset = document.createElement('fieldset', ['id = "fieldset"']);
//     let selectFieldset = getElementById('fieldset');
//     let legend = document.createElement('legend');
//     let h2 = document.createElement('h2');
//     let input = document.createElement('input', ['name="options"']);
//     let label = document.createElement('label');
//     let boton = document.createElement('button',  ['onclick = "verificarRespuestaYAvanzar()"']);
//     let divMarcador = document.createElement('div', ['id="marcador"'])
//     fieldset.append(legend);
//     fieldset.append(h2);
//     fieldset.append(input);
//     fieldset.append(label);
//     fieldset.append(input);
//     fieldset.append(label);
//     fieldset.append(input);
//     fieldset.append(label);
//     fieldset.append(input);
//     fieldset.append(label);
//     fieldset.append(boton);
//     fieldset.append(divMarcador);

//     // usando innerHTML, ref MDN
//     container.innerHTML = estructuraHTML;

// }

// !No sabíamos como almacenar el valor del label sin añadirle un "value" a los inputs
// !En el apartado formularios del DOM, coding rooms aparece la forma que estamos usando
// !AL usar un <form> nos da un warning en la consola, deberíamos haberlo hecho sin un <form>?
function mostrarPregunta() {
  let pregunta = preguntas[preguntaActual];
  let estructuraHTML = `
                <form>
                    <h2>${pregunta.question}</h2>
                    
                
                    <div id="answers">
                    <label>
                        <input type="radio"  name="options" value="${pregunta.answers[0]}"/>
                        ${pregunta.answers[0]}
                    </label>
                
                    <label>
                        <input type="radio"  name="options" value="${pregunta.answers[1]}"/>
                        ${pregunta.answers[1]}
                    </label>

                    <label>
                        <input type="radio"  name="options" value="${pregunta.answers[2]}"/>
                        ${pregunta.answers[2]}
                    </label>

                    <label>
                        <input type="radio"  name="options" value="${pregunta.answers[3]}"/>
                        ${pregunta.answers[3]}
                    </label>
                    </div>
                     <button onclick="verificarRespuestaYAvanzar()">Siguiente pregunta</button>
                    <div id="marcador">${preguntaActual +1} / ${preguntas.length}</div>
                </form>
                <div id="int"></div>
            `;
  // usando innerHTML, Fuente: MDN
  container.innerHTML = estructuraHTML;
}

function verificarRespuestaYAvanzar() {
  let seleccion = document.querySelectorAll('input[type="radio"]');
  let respuestaSeleccionada = null;
  for (let i = 0; i < seleccion.length; i++) {
    if (seleccion[i].checked) {
      respuestaSeleccionada = seleccion[i].value;
    }
  }

  /* if (respuestaSeleccionada === null || respuestaSeleccionada === ""){
                alert('Debes seleccionar una respuesta');
                return;

            } */

  if (respuestaSeleccionada === preguntas[preguntaActual].correct) {
    // alert("!Enhorabuena, tu respuesta es correcta!")
    contador++;
  } else {
    // alert("Respuesta incorrecta. La respuesta correcta es: " + preguntas[preguntaActual].correct);
  }

  preguntaActual = preguntaActual + 1;
  mostrarPregunta();
}
