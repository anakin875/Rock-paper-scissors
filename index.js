/* do{
    playerSelection = prompt("Please choose rock, paper or scissors")
    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    gameRound(playerSelection, computerSelection)

    playAgain = prompt("Want to play again?(y/n):").toLowerCase()
}while(playAgain == "y") */
let playerWins = 0
let computerWins = 0
const resultsTable = document.querySelector('#results')
const scoreBoard = document.querySelector('#scoreboard')

const resultDiv = document.createElement('div')
/* const playerScore = document.createElement('div')
const computerScore = document.createElement('div') */

const selection = document.querySelectorAll("button")

selection.forEach((button) => {
        button.addEventListener('click', () =>{
            let playerSelection = button.value
            gameRound(playerSelection)
        })
    }
)


function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    switch(num){
        case 0:
            computerSelection = "rock"
            break
        case 1:
            computerSelection = "paper"
            break
        case 2:
            computerSelection = "scissors"
            break 
    }
    return computerSelection
}

function gameRound(playerSelection){
    let computerSelection = getComputerChoice()

    if(playerSelection == computerSelection){
        document.getElementById("results").textContent = `${playerSelection} vs ${computerSelection}, it's a tie!`
    }
    else if(playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "rock"){

        document.getElementById("results").textContent = `${playerSelection} vs ${computerSelection}, you lose!`
        computerWins++
        document.getElementById("computerScore").textContent = `Computer: ${computerWins}`
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper"){

        document.getElementById("results").textContent = `${playerSelection} vs ${computerSelection}, you win!`
        playerWins++
        document.getElementById("playerScore").textContent = `Player: ${playerWins}`
    }

    if(playerWins == 5){
        document.getElementById("results").textContent = "Player beats computer!"
        selection.forEach((button) => {
            button.disabled = true
        })
    }
    if(computerWins == 5){
        document.getElementById("results").textContent = "You got beaten by a computer!"
        selection.forEach((button) => {
            button.disabled = true
        })
    }
}