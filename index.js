'use strict'



        let preguntas;
        let preguntaActual = 0;
        const preguntaContainer = document.getElementById("pregunta-container");

        fetch('/quiz.json')
            .then(response => response.json())
            .then(data => {
                preguntas = data;
                mostrarPregunta();
            });

        function mostrarPregunta() {
            const pregunta = preguntas[preguntaActual];
            const preguntaHTML = `
                <h2>${pregunta.question}</h2>
                <ul>
                    ${pregunta.answers.map(respuesta => `<li>${respuesta}</li>`).join('')}
                </ul>
            `;
            preguntaContainer.innerHTML = preguntaHTML;
        }

        function mostrarSiguientePregunta() {
            preguntaActual = (preguntaActual + 1) % preguntas.length;
            mostrarPregunta();
        }


/* const getBerto = async() =>{
    try {
        const response = await fetch("./quiz.json");
        const search = await response.json();
        const result = search;
        return result;
    } catch (error) {
        console.error(error);
    }
};


const juego = async(pregunta) => {
    const game = await getBerto(pregunta);
    console.log('GAME', game);
    const container = document.getElementById('container');
    container.innerHTML = `<h1>${game.map((element) => element)
    .join('')}</h1>`;
}
 */








