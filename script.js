// array to store all possible choices //
let possibleChoices = ["rock","paper","scissor"];


function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * possibleChoices.length);
    let computerChoice = possibleChoices[randomIndex];
    return computerChoice;
}


function getPlayerChoice(){

    let playerChoice = null;
    do{
        playerChoice = prompt("Enter rock, paper or scissor");
        playerChoice = playerChoice.toLowerCase();
        playerChoice = playerChoice.trim();
    } while (!(possibleChoices.includes(playerChoice)))

    return playerChoice;
}


function playRound(getComputerChoice,getPlayerChoice){
    let verdict = null;
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()

    if (computerChoice == playerChoice){
        verdict = "It's a draw!"
    }
    else if ( playerChoice == "rock" && computerChoice== "scissor" ||
              playerChoice == "paper" && computerChoice == "rock" ||
              playerChoice == "scissor" && computerChoice == "paper" 
            ){
        
        verdict = `You win! ${playerChoice} beats ${computerChoice}`

    }
    else {
        verdict = `You lose! ${computerChoice} beats ${playerChoice}`
    }

    return verdict
}

console.log(playRound(getComputerChoice,getPlayerChoice));