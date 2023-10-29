'use strict'



        let preguntas;
        let preguntaActual = 0;
        const preguntaContainer = document.getElementById("pregunta-container");

        fetch('/quiz.json')
            .then(response => response.json())
            .then(data => {
                preguntas = data;
                mostrarPregunta();
            })
            .catch(error => {
                console.error(error);
            });


        function mostrarPregunta() {
            const pregunta = preguntas[preguntaActual];
            const estructuraHTML = `
                <form>
                    <fieldset>
                    <legend> Juego de Preguntas y Respuestas </legend>
                    <h2>${pregunta.question}</h2>

                    <input type="radio" id="uno" name="options"/>
                    <label for="uno" >${pregunta.answers[0]}</label>

                    <input type="radio" id="dos" name="options"/>
                    <label for="dos" >${pregunta.answers[1]}</label>

                    <input type="radio" id="tres" name="options"/>
                    <label for="tres" >${pregunta.answers[2]}</label>

                    <input type="radio" id="cuatro" name="options"/>
                    <label for="cuatro" >${pregunta.answers[3]}</label>

                    <button onclick="verificarRespuestaYAvanzar()">Comprobar respuesta</button>
                    <div id="marcador"> Score : "aciertos" / ${preguntaActual +1}</div>
                    </fieldset>
                </form>
            `;
            preguntaContainer.innerHTML = estructuraHTML;
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

         function verificarRespuestaYAvanzar() {
            
        preguntaActual = (preguntaActual + 1) % preguntas.length;
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






{/* <label for="2">

<li><input type="radio" id="2" name="options"/>${respuesta}</li>

</label>

<label for="3">

<li><input type="radio" id="3" name="options"/>${respuesta}</li>

</label>

<label for="4">

<li><input type="radio" id="4" name="options"/>${respuesta}</li>

</label> */}



