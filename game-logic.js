const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

getHumanChoice()

function getHumanChoice() {
    do {
        const choice = prompt("Write your option: rock, paper, scissors")
        switch (choice) {
            case "rock":
                return choices.rock
            case "paper":
                return choices.paper
            case "scissors":
                return choices.scissors
        } 
    } while (true);
    
}

function getComputerChoice() {
    const choicesKeys = Object.keys(choices)
    const randomChoice = getRandomInt(choicesKeys.length)
    return choicesKeys[randomChoice]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}