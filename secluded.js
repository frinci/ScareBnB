//variables

let reserveButton = document.querySelector(".reserve_manor")

let checkInDate = document.querySelector('.checkin')

let checkOutDate = document.querySelector('.checkout')

let ghoulsNum = document.querySelector('.ghouls_number')

let inputPrice = document.querySelector(".input_price")

let homeButton = document.querySelector(".logo")

// helper functions

function reservationComplete(event){
    event.preventDefault();
    alert("Thanks for booking with ScareBnB, you will receive a confirmation soon!")
}

function goHome(event){
    event.preventDefault();
    window.open("home.html")
}

// even listeners

const reserveManor = () => {
    reserveButton.addEventListener('click', reservationComplete)
}

reserveManor()

const homeClick = () => {
    homeButton.addEventListener("click", goHome)
}

homeClick()