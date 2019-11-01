//variables

let secludedButton = document.querySelector(".secluded_button");

let graveButton = document.querySelector(".graveyard_button");

let enterButton = document.querySelector(".enter_button")

let checkInInput = document.querySelector(".date_start")

let checkOutInput = document.querySelector(".date_end")

let ghouls = document.querySelector('.ghouls')

let formHome = document.querySelector("form.form_home")

// helper functions

function openSecluded(event) {
    event.preventDefault();
    window.open("secluded.html")
}

function openGraveyard(event) {
    event.preventDefault();
    window.open("graveyard.html")
}

// event listeners

const secludedSelector = () => {
    secludedButton.addEventListener('click', openSecluded)
}

secludedSelector()

const graveSelector = () => {
     graveButton.addEventListener('click', openGraveyard)
}

graveSelector()

