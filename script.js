// array to store all possible choices //
let possibleChoices = ["rock","paper","scissor"];
const NUMBER_OF_ROUNDS = 5;


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
        
        verdict = `You win! ${playerChoice} beats ${computerChoice}`;

    }
    else {
        verdict = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    return verdict
}

function playGame(playRound,NUMBER_OF_ROUNDS){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++){
        let verdict = playRound(getComputerChoice,getPlayerChoice);
        console.log(verdict);
        verdict = verdict.charAt(4);
        if (verdict == "w"){
            playerScore = playerScore + 1;
        }
        else if (verdict == "l"){
            computerScore = computerScore + 1;
        }
    
    }

    if (playerScore == computerScore){
        return "Its a draw!"
    }
    else if (playerScore > computerScore){
        return "You win!"    
    }  
    else{
        return "Computer wins!"
    }
}

console.log(playGame(playRound,NUMBER_OF_ROUNDS));