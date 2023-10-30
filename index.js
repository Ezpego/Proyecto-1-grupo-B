'use strict'



        let preguntas;
        let preguntaActual = 0;
        let contador = 0;
        let container = document.getElementById("juego-container");

        fetch('/quiz.json')
            .then(response => response.json())
            .then(data => {
                preguntas = data;
                mostrarPregunta();
            })
            .catch(error => {
                console.error(error);
            });

        // !No sabíamos como almacenar el valor del label sin añadirle un "value" a los inputs
        function mostrarPregunta() {
            let pregunta = preguntas[preguntaActual];
            let estructuraHTML = `
                <form>
                    <fieldset>
                    <legend> Juego de Preguntas y Respuestas </legend>
                    <h2>${pregunta.question}</h2>
                    
                    <input type="radio" id="uno" name="options" value="${pregunta.answers[0]}"/>
                    <label for="uno" >${pregunta.answers[0]}</label>

                    <input type="radio" id="dos" name="options" value="${pregunta.answers[1]}"/>
                    <label for="dos" >${pregunta.answers[1]}</label>

                    <input type="radio" id="tres" name="options" value="${pregunta.answers[2]}"/>
                    <label for="tres" >${pregunta.answers[2]}</label>

                    <input type="radio" id="cuatro" name="options" value="${pregunta.answers[3]}"/>
                    <label for="cuatro" >${pregunta.answers[3]}</label>

                    <button onclick="verificarRespuestaYAvanzar()">Comprobar respuesta</button>
                    <div id="marcador"> Score : ${contador} / ${preguntaActual}</div>
                    </fieldset>
                </form>
            `;
            // usando innerHTML, ref MDN
            container.innerHTML = estructuraHTML;
            
        }

           

        /* function validarRespuesta(){
            const respuestaSeleccionada = document.getElementById("1")
            const respuestaCorrecta = pregunta.correct;

            if( respuestaSeleccionada === respuestaCorrecta){
                alert("Correcto!");
            }

            else {
                alert("Te has equivocado!");
            }
        }; */

        

        /* function verificarRespuestaYAvanzar() {

            preguntaActual = (preguntaActual + 1) % preguntas.length;
            mostrarPregunta();
        } */

        function verificarRespuestaYAvanzar() {
            let seleccion = document.querySelectorAll('input[type="radio"]');
            let respuestaSeleccionada;
            for (let i = 0; i < seleccion.length; i++) {
                if (seleccion[i].checked) {
                    respuestaSeleccionada = seleccion[i].value;
                }
            }
        

            
            if (respuestaSeleccionada === preguntas[preguntaActual].correct) {
                // alert("!Enhorabuena, tu respuesta es correcta!")
                contador ++;
            }  else {
                // alert("Respuesta incorrecta. La respuesta correcta es: " + preguntas[preguntaActual].correct);
            }

            preguntaActual = (preguntaActual + 1);
            mostrarPregunta();
        }


       /*  function verificarRespuestaYAvanzar() {

            let respuestaSeleccionada = document.getElementById("uno")
            let respuestaCorrecta = pregunta.correct;
            console.log(respuestaCorrecta);

            if( respuestaSeleccionada === respuestaCorrecta){
                preguntaActual = (preguntaActual + 1) % preguntas.length;
                mostrarPregunta();
            }

            else {
                alert("Te has equivocado!");
            }
            
           
        } */






/* <label for="2">

<li><input type="radio" id="2" name="options"/>${respuesta}</li>

</label>

<label for="3">

<li><input type="radio" id="3" name="options"/>${respuesta}</li>

</label>

<label for="4">

<li><input type="radio" id="4" name="options"/>${respuesta}</li>

</label> */


// Función siguiente pregunta
/* 
 function verificarRespuestaYAvanzar() {

    preguntaActual = (preguntaActual + 1) % preguntas.length;
    mostrarPregunta();
} */
