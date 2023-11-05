"use strict";

let preguntas;
let preguntaActual = 48;
let contador = 0;
let container = document.getElementById("juego-container");


fetch("/quiz.json") 
  .then((response) => response.json())
  .then((data) => {
    preguntas = data;
    mostrarPregunta();
  })
  .catch((error) => {
    console.error(error);
  });
  


function mostrarPregunta() {
  if (preguntaActual < preguntas.length) {
    let pregunta = preguntas[preguntaActual];
    let h2 = document.querySelector('h2');
    h2.textContent = `${pregunta.question}`;
    let respuestas = document.getElementById('answers');
    respuestas.innerHTML ='';

    for (let i = 0; i < pregunta.answers.length; i++){
      let label = document.createElement('label');
      let input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', 'options');
      input.setAttribute('value', pregunta.answers[i]);
      label.appendChild(input);
      let labelContenido = document.createTextNode(pregunta.answers[i])
      label.appendChild(labelContenido);
      respuestas.appendChild(label);
    }
    let boton = document.querySelector('button');
    boton.textContent = 'Continue';

    let score = document.getElementById('marcador');
    score.textContent = `${preguntaActual + 1} / ${preguntas.length}`;

    let selectBoton = document.querySelector('#boton');
    selectBoton.removeEventListener('click', reiniciar);
    selectBoton.addEventListener('click', verificarRespuestaYAvanzar);
  } else {
    mensajeFinal();
  }
}

function mensajeFinal() {
  let mensaje = `Congrats, you´ve got ${contador} hits of ${preguntas.length} questions`;
  let h2question = document.querySelector('h2');
  h2question.textContent = mensaje;

  let boton = document.querySelector('button');
  boton.textContent = 'Start Over';

  let respuestas = document.getElementById('answers');
  respuestas.textContent = " ";

  let selectBoton = document.querySelector('#boton');
  selectBoton.removeEventListener('click', verificarRespuestaYAvanzar)//Por qué hay que eliminar ?
  selectBoton.addEventListener('click', reiniciar);
}

function reiniciar(){
  preguntaActual = 0;
  contador = 0;
  mostrarPregunta();
}


function verificarRespuestaYAvanzar() {
  let seleccion = document.querySelectorAll('input[type="radio"]');
  let respuestaSeleccionada = null;
  for (let i = 0; i < seleccion.length; i++) {
    if (seleccion[i].checked) {
      respuestaSeleccionada = seleccion[i].value;
    }
  }

  if (!respuestaSeleccionada){
    let mensaje = 'You must select an answer to continue';
    let h2question = document.querySelector('h2');
    h2question.classList.add("yellowText"); 
    h2question.textContent = mensaje;
    return;

            }
  if (respuestaSeleccionada === preguntas[preguntaActual].correct) {
    let h2question = document.querySelector('h2');
    h2question.classList.remove("yellowText");
    contador++;
  } else {
    let h2question = document.querySelector('h2');
    h2question.classList.remove("yellowText");
  }

  preguntaActual = preguntaActual + 1;
  mostrarPregunta();
}

