'use strict'

function tripleXXX() {
    
    fetch("/quiz.json")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

tripleXXX();