window.addEventListener('load', () => {
    console.log('load')
    game()
})

const MAX_SCORE = 5

const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

let humanScore = 0
let computerScore = 0

let isGameOver = false

let rockButton = null
let paperButton = null
let scissorsButton = null
let messageText = null
let scoreText = null

function game() {
    rockButton = document.querySelector("#rock-button")
    paperButton = document.querySelector("#paper-button")
    scissorsButton = document.querySelector("#scissors-button")

    messageText = document.querySelector("#message")
    scoreText = document.querySelector("#score")

    rockButton.addEventListener("click", () => playRound("rock"))
    paperButton.addEventListener("click", () => playRound("paper"))
    scissorsButton.addEventListener("click", () => playRound("scissors"))

    messageText.textContent = ""
    scoreText.textContent = ""
}

function youLose(humanChoice, computerChoice)
{
    computerScore++
    return `You lose! ${computerChoice} beats ${humanChoice} :(`
}

function youWin(humanChoice, computerChoice) {
    humanScore++
    return `You win! ${humanChoice} beats ${computerChoice} :)`
}

function draw() {
    return `Draw! :|`
}

function playRound(humanChoice) {
    if (!isGameOver) {
        const computerChoice = getComputerChoice()
        const message = getRoundWinnerMessage(humanChoice, computerChoice)

        displayMessage(message)
        displayScore()

        checkGameOver()
    }
    else {
        displayMessage("In order to play again, press Cmd + R")
    }
}

function checkGameOver() {
    if (humanScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
        isGameOver = true
        displayGameOverMessage()
    }
    if(isGameOver) {
        messageText.classList.add("game-over");
    } else {
        messageText.classList.remove("game-over")
    }
}

function getRoundWinnerMessage(humanChoice, computerChoice) {
    let message = ""
    
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    message = youLose(humanChoice, computerChoice)
                    break
                case "scissors":
                    message = youWin(humanChoice, computerChoice)
                    break
                default:
                    message = draw()
            }
            break

        case "paper":
            switch (computerChoice) {
                case "rock":
                    message = youWin(humanChoice, computerChoice)
                    break
                case "scissors":
                    message = youLose(humanChoice, computerChoice)
                    break
                default:
                    message = draw()
            }
            break

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    message = youLose(humanChoice, computerChoice)
                    break
                case "paper":
                    message = youWin(humanChoice, computerChoice)
                    break
                default:
                    message = draw()
            }
            break     
    }
    
    return message
}

function displayMessage(message) {
    messageText.textContent = message
}

function displayScore() {
    const message = `You: ${humanScore} - Computer: ${computerScore}`
    scoreText.textContent = message
}

function displayGameOverMessage () {
    let message = ""
    
    if (humanScore > computerScore) {
        message = `You won!`
    } 
    else {
        message = `You lost!\nBetter luck next time..`
    }

    displayMessage(message)
}

function getHumanChoice() {

    let isValidChoice = false
    let message = "Write your option: rock, paper, scissors"
    let humanChoice = null

    do {
        const choice = prompt(message)
        humanChoice = choice.toLocaleLowerCase()

        switch (humanChoice) {
            case choices.rock:
            case choices.paper:
            case choices.scissors:
                isValidChoice = true
                break
            default:
                message = "WRONG ANSWER! Try again: rock, paper, scissors"
        } 
    } while (!isValidChoice)

    return humanChoice
    
}

function getComputerChoice() {
    const choicesKeys = Object.keys(choices)
    const randomChoice = getRandomInt(choicesKeys.length)
    return choicesKeys[randomChoice]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}