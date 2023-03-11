let playerScore = 0;
let compScore = 0;
let roundCount = 0;

// get computers choice of rock paper or scissors

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(choices.length * Math.random())];
}

// display gameResults

const displayResults = (results) => {
    const gameResults = document.querySelector("#gameResults");
    gameResults.textContent = results;
};

// play a round 

function playRound(compChoice, pChoice) {
    roundCount++;
    if (pChoice === compChoice) {
        displayResults(`It's a draw this round. You both picked ${pChoice}!`);
    } else if (
        (pChoice === 'rock' && compChoice === 'paper') ||
        (pChoice === 'paper' && compChoice === 'scissors') ||
        (pChoice === 'scissors' && compChoice === 'rock')
    ) {
        compScore++;
        displayResults(`You lost a round! ${compChoice} beats ${pChoice}!`)

    } else {
        playerScore++;
        displayResults(`You win a round! ${pChoice} beats ${compChoice}!`)
    }


    document.querySelector('#roundCount').textContent = `round: = ${roundCount}/5`
    document.querySelector('#playerScore').textContent = `player score = ${playerScore}`
    document.querySelector('#computerScore').textContent = `computer score = ${compScore}`

    if (roundCount >= 5) {
        document.querySelector('.choices').style.display = 'none';
        document.querySelector("#again").style.display = 'block';
        if (playerScore > compScore) {
            displayResults(`Final Score: ${playerScore} - ${compScore}! You win!`);

        } else if (playerScore < compScore) {

            displayResults(`Final Score: ${playerScore} - ${compScore}! You lose!`);

        } else
            displayResults(`Final Score: ${playerScore} - ${compScore}! Tie game!`);

    }


}

// start the game

const gameInit = () => {
    document.querySelector("#hide").style.display = "flex";
    const choices = document.querySelector(".choices");
    choices.addEventListener("click", (event) => {
        const pChoice = event.target.id;
        playRound(getComputerChoice(), pChoice);
    });
    document.querySelector("#start").style.display = "none";

};

const anotherOne = () => {
    location.reload();
}

// event listeners 

document.querySelector("#start").addEventListener("click", gameInit);
document.querySelector("#hide").style.display = "none";
document.querySelector("#again").addEventListener('click', anotherOne)