let playerWins = 0
let computerWins = 0
const resultsTable = document.querySelector('#results')
const scoreBoard = document.querySelector('#scoreboard')
const container = document.querySelector('#body')
const selection = document.querySelectorAll("button")
const lastButton = document.getElementById("break")

selection.forEach((button) => {
    button.addEventListener('click', () =>{
            let playerSelection = button.value
            gameRound(playerSelection, playerWins, computerWins)
    })
})

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    switch(num){
        case 0:
            computerSelection = "Rock"
            break
        case 1:
            computerSelection = "Paper"
            break
        case 2:
            computerSelection = "Scissors"
            break 
    }
    return computerSelection
}


//LO QUE PASA AQUI ESQ PLAYERWINS Y COMPUTERWINS SOLO SE ACTUALIZAN DE FORMA LOCAL EN LA FUNCION
//TENGO QUE DEVOLVERLOS AFUERA DE LA FUNCION PARA QUE SE ACTUALICEN DE FORMA GLOBAL
function gameRound(p1, scoreA, scoreB){
    let computerSelection = getComputerChoice()

    if(p1 == computerSelection){
        document.getElementById("results").textContent = `${p1} vs ${computerSelection}, it's a tie!`
    }
    else if(p1 == "Rock" && computerSelection == "Paper" ||
            p1 == "Paper" && computerSelection == "Scissors" ||
            p1 == "Scissors" && computerSelection == "Rock"){

        scoreB++
        computerWins = scoreB
        document.getElementById("results").textContent = `${p1} vs ${computerSelection}, you lose!`
        document.getElementById("computerScore").textContent = `Computer: ${scoreB}`
    }
    else if(p1 == "Rock" && computerSelection == "Scissors" ||
            p1 == "Paper" && computerSelection == "Rock" ||
            p1 == "Scissors" && computerSelection == "Paper"){

        scoreA++
        playerWins = scoreA
        document.getElementById("results").textContent = `${p1} vs ${computerSelection}, you win!`
        document.getElementById("playerScore").textContent = `Player: ${scoreA}`
    }

    if(scoreA == 5 || scoreB == 5) replayGame(scoreA, scoreB)

}

function replayGame(scoreA, scoreB){
    if(scoreA == 5) document.getElementById("results").textContent = "Player beats computer!"

    if(scoreB == 5) document.getElementById("results").textContent = "You got beaten by a computer!"

    selection.forEach((button) => {
        button.disabled = true
    })
    const playAgain = document.createElement('button')
    playAgain.classList.add('replay')
    playAgain.textContent = 'Play Again'
    container.appendChild(playAgain)
    playAgain.addEventListener('click', () =>{
        playerWins = 0
        computerWins = 0
        document.getElementById("playerScore").textContent = `Player: ${playerWins}`
        document.getElementById("computerScore").textContent = `Computer: ${computerWins}`
        selection.forEach((button) => {
            button.disabled = false
        })
        playAgain.remove()
    })

}


