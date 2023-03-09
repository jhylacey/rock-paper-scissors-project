// // let compChoice = getComputerChoice();
// pChoice = prompt('Choose between rock, paper, or scissors!', "").toLowerCase();
let compChoice;
let pChoice;



// get computers choice of rock paper or scissors

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(choices.length * Math.random())];
}


// play a single round and return result
function playRound(compChoice, pChoice) {
    pChoice = prompt("Choose between rock, paper, or scissors", "");
    compChoice = getComputerChoice();

    if (pChoice === compChoice) {
        result = "draw";
        console.log(`It's a draw this round. You both picked ${pChoice}!`)

    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')) {
        result = "loss";
        console.log(`You lost a round! ${compChoice} beats ${pChoice}!`)

    } else {
        result = "win";
        console.log(`You win a round! ${pChoice} beats ${compChoice}!`)
    }
    return result;
}


// function playGame
// playRound(compChoice, pChoice)


function playGame() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(compChoice, pChoice);
        if (result === "win") {
            playerScore = playerScore + 1;
        } else if (result === "loss") {
            compScore = compScore + 1;
        } else continue;
    }

    if (playerScore > compScore) {
        console.log(`Final Score: ${playerScore} - ${compScore}! You win!`)
    } else if (playerScore < compScore) {
        console.log(`Final Score: ${playerScore} - ${compScore}! You lose!`)
    } else console.log(`Final Score: ${playerScore} - ${compScore}! Tie game!`);
}
playGame()



// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound(compChoice, pChoice);
//     }
// }


// playGame()

// // playRound()