

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

window.addEventListener('click', function () {


})
