const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

let humanScore = 0
let computerScore = 0

playGame()

function playGame() {
    const totalRounds = 5

    for (let i = 1; i <= totalRounds; i++) {
        console.log(`ROUND ${i}`)
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`)

        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
        console.log("\n\n")   
    }

    console.log("GAME OVER")
    let finalMessage = ""

    if (humanScore === computerScore) {
        finalMessage = `It's a draw: ${humanScore} - ${computerScore}`
    } else if (humanScore > computerScore) {
        finalMessage = `YOU WIN!!! ${humanScore} - ${computerScore}`
    } else {
        finalMessage = `Better luck next time... You lost ${humanScore} - ${computerScore}`
    }

    alert(finalMessage)
    
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

function playRound(humanChoice, computerChoice) {
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
    console.log(message)
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