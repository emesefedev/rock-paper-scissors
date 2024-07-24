const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

let humanScore = 0
let computerScore = 0

game()

function game() {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)

    console.log(`H: ${humanScore}, C: ${computerScore}`)
}

function playRound(humanChoice, computerChoice) {
    let message = ""
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    computerScore++
                    message = `You lose! ${computerChoice} beats ${humanChoice} :(`
                    break
                case "scissors":
                    humanScore++
                    message = `You win! ${humanChoice} beats ${computerChoice} :)`
                    break
                default:
                    message = `Draw! :|`
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++
                    message = `You win! ${humanChoice} beats ${computerChoice} :)`
                    break
                case "scissors":
                    computerScore++
                    message = `You lose! ${computerChoice} beats ${humanChoice} :(`
                    break
                default:
                    message = `Draw! :|`
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++
                    message = `You lose! ${computerChoice} beats ${humanChoice} :(`
                    break
                case "paper":
                    humanScore++
                    message = `You win! ${humanChoice} beats ${computerChoice} :)`
                    break
                default:
                    message = `Draw! :|`
                    break
            }
            break     
    }
    console.log(message)
}

function getHumanChoice() {

    let isValidChoice = false
    let message = "Write your option: rock, paper, scissors"
    let humanChoice = null

    do {
        const choice = prompt(message)
        switch (choice.toLocaleLowerCase()) {
            case "rock":
                humanChoice = choices.rock
                isValidChoice = true
                break
            case "paper":
                humanChoice = choices.paper
                isValidChoice = true
                break
            case "scissors":
                humanChoice = choices.scissors
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