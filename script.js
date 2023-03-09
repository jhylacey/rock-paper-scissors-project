let compChoice;
let playerChoice;
let choices = ["rock", "paper", "scissors"]

// get computers choice of rock paper or scissors

function getComputerChoice() {
    compChoice = choices[Math.floor(choices.length * Math.random())];
}



//function calls

getComputerChoice()

