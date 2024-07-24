const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

getComputerChoice()

function getComputerChoice() {
    const randomChoice = getRandomInt(Object.keys(choices).length)
    console.log(randomChoice)
    console.log(Object.keys(choices)[randomChoice])
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}