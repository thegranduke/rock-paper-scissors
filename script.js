let possibleChoices = ["rock","paper","scissor"];

function getComputerChoice(possibleChoices){
    let randomIndex = Math.floor(Math.random() * possibleChoices.length);
    let computerChoice = possibleChoices[randomIndex];
    return computerChoice;
}

console.log(getComputerChoice(possibleChoices));