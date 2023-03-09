let compChoice = getComputerChoice();
let pChoice;


// get computers choice of rock paper or scissors

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(choices.length * Math.random())];
}



// play a single round and return result
function playRound(compChoice, pChoice) {
    pChoice = prompt('Choose between rock, paper, or scissors!', "").toLowerCase();

    if (pChoice === compChoice) {
        result = `It's a draw. You both picked ${pChoice}!`;

    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')) {
        result = `You lost! ${compChoice} beats ${pChoice}!`;

    } else {
        result = `You win! ${pChoice} beats ${compChoice}!`;
    }
    return result;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let roundResults = playRound(compChoice, pChoice);
        if (roundResults = `You lost! ${compChoice} beats ${pChoice}!`) {
            console.log('You lost!')
        } else console.log('test')
    }
}

playGame()
