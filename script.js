//variables

//home variables
let secludedButton = document.querySelector(".secluded_button");

let graveButton = document.querySelector(".graveyard_button");

let enterButton = document.querySelector(".enter_button")

let checkInInput = document.querySelector(".date_start")

let checkOutInput = document.querySelector(".date_end")

let ghouls = document.querySelector('.ghouls')

let formHome = document.querySelector("form.form_home")

//page 2 and 3 variables

let reserveButton = document.querySelector(".reserve_manor")

let checkInDate = document.querySelector('.checkin')

let checkOutDate = document.querySelector('.checkout')

let ghoulsNum = document.querySelector('.ghouls_number')

let inputPrice = document.querySelector(".input_price")

//event listeners and helper functions

// function changeSecluded(event) {
//     event.preventDefault();

//     secludedButton.style.backgroundColor = "#34471b"
// }

// const secludedSelector = () => {
//     secludedButton.addEventListener('click', openSecluded)
// }

// secludedSelector()

// function changeGrave(event) {
//      event.preventDefault();

//      graveButton.style.backgroundColor  = "#34471b"
// }

// function changeGraveBack(event) {
//     event.preventDefault();
//     graveButton.style.backgroundColor = "#7f995d"
// }

// const graveSelector = () => {
//      graveButton.addEventListener('click', openGraveyard)
// }

// graveSelector()

function openGraveyard(event) {
    event.preventDefault();
    window.open("graveyard.html")
}

function openSecluded(event) {
    event.preventDefault();
    window.open("secluded.html")
}

// function openNewPage(event) {
//     event.preventDefault();

//     if (graveButton.clicked === true && enterButton('button').clicked === true){
//         openGraveyard()
//     }
//     else if (secludedButton.clicked === true && enterButton('button').clicked === true){
//         openSecluded()
//     }
//     else if (secludedButton.clicked === true && graveButton.clicked === true && enterButton.clicked === true){
//       prompt("Please make only one location selection")
//         return (formHome).reset()
//     }
// }

// const enterIfYouDare = () => {
//     enterButton.addEventListener('click', openNewPage)
//  }

// enterIfYouDare()
// openNewPage()

function bookingComplete(event){
    event.preventDefault();
    alert("Thanks for booking with ScareBnB, you will receive a confirmation soon!")
}

const reserveManor = () => {
    reserveButton.addEventListener('click', bookingComplete)
}

reserveManor()