let compChoice;
let pChoice;

let playerScore = 0;
let compScore = 0;
let roundCount = 0;




// get computers choice of rock paper or scissors

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(choices.length * Math.random())];
}


// play a single round and return result



function playRoundRock(compChoice, pChoice) {
    pChoice = "rock";
    compChoice = getComputerChoice();

    if (pChoice === compChoice) {
        result = "draw";
        roundCount = roundCount + 1;

        displayResults(`It's a draw this round. You both picked ${pChoice}!`)

    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')) {
        result = "loss";
        compScore = compScore + 1;

        displayResults(`You lost a round! ${compChoice} beats ${pChoice}!`)

    } else {
        result = "win";
        playerScore = playerScore + 1;
        roundCount = roundCount + 1;
        displayResults(`You win a round! ${pChoice} beats ${compChoice}!`)
    }
    return result;
}

function playRoundPaper(compChoice, pChoice) {
    pChoice = "paper";
    compChoice = getComputerChoice();

    if (pChoice === compChoice) {
        result = "draw";
        displayResults(`It's a draw this round. You both picked ${pChoice}!`)

    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')) {
        result = "loss";
        compScore = compScore + 1;
        roundCount = roundCount + 1;


        displayResults(`You lost a round! ${compChoice} beats ${pChoice}!`)

    } else {
        result = "win";
        playerScore = playerScore + 1;
        roundCount = roundCount + 1;
        displayResults(`You win a round! ${pChoice} beats ${compChoice}!`)
    }
    return result;
}

displayResults = (results) => {
    document.querySelector('#gameResults').textContent = results
}

function playRoundScissors(compChoice, pChoice) {
    pChoice = "scissors";
    compChoice = getComputerChoice();

    if (pChoice === compChoice) {
        result = "draw";
        roundCount++;

        displayResults(`It's a draw this round. You both picked ${pChoice}!`)

    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')) {
        result = "loss";
        compScore = compScore + 1;
        roundCount++;

        displayResults(`You lost a round! ${compChoice} beats ${pChoice}!`)

    } else {
        result = "win";
        playerScore = playerScore + 1;
        roundCount++;
        displayResults(`You win a round! ${pChoice} beats ${compChoice}!`)
    }
    return roundCount;

}



//select buttons
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener("click", playRoundRock)

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener("click", playRoundPaper)

const scissorsBtn = document.querySelector('#scissorBtn');
scissorsBtn.addEventListener("click", playRoundScissors)




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