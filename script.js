let compChoice;
let pChoice;

let playerScore = 0;
let compScore = 0;
let roundCount = 0;


// a function that returns the results of an event listener button click
// a function that receives the results of a event listener button click and compares the result to a randomized computer choice and returns the results
// a function that keeps count of the results as a score count 
// a function that keeps count of rounds
// a function that displays the winner based on rounds






// get computers choice of rock paper or scissors

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(choices.length * Math.random())];
}


// play a single round and return result



function playRound(compChoice, pChoice) {
    compChoice = getComputerChoice();

    if (pChoice === compChoice) {
        result = "draw";
        displayResults(`It's a draw this round. You both picked ${pChoice}!`)

    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')) {
        result = "loss";
        displayResults(`You lost a round! ${compChoice} beats ${pChoice}!`)

    } else {
        result = "win";
        displayResults(`You win a round! ${pChoice} beats ${compChoice}!`)
    }
    return result;
}

displayResults = (results) => {
    document.querySelector('#gameResults').textContent = results
}



// let data1 = "compchoice";
// let data2;

// const test = (value) => {
//     function()
// }

//select buttons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", () => {
    playRound(compChoice, "rock")
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener("click", () => {
    playRound(compChoice, "paper")
})

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener("click", () => {
    playRound(compChoice, "scissors")
})

//get choices or whatever




//play a game of 5 rounds

// function playGame() {
//     let playerScore = 0;
//     let compScore = 0;
//     let roundCount = 0;

//     if (playerScore > compScore) {
//         console.log(`Final Score: ${playerScore} - ${compScore}! You win!`)
//     } else if (playerScore < compScore) {
//         console.log(`Final Score: ${playerScore} - ${compScore}! You lose!`)
//     } else console.log(`Final Score: ${playerScore} - ${compScore}! Tie game!`);
// }


//function calls 

// playGame()


console.log(roundCount)