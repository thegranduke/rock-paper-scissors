let possibleChoices = ["rock","paper","scissor"];

function getComputerChoice(possibleChoices){
    let randomIndex = Math.floor(Math.random() * possibleChoices.length);
    let computerChoice = possibleChoices[randomIndex];
    return computerChoice;
}

function getPlayerChoice(){
    let userChoice = prompt("Enter rock, paper or scissors");
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.trim();
    if (possibleChoices.includes(userChoice)){
        return userChoice;
    }
    else{
        console.log("Invalid value entered")
    }
}

console.log(getPlayerChoice())