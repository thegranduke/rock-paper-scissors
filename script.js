// array to store all possible choices //
let possibleChoices = ["rock","paper","scissor"];
const NUMBER_OF_ROUNDS = 5;


function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * possibleChoices.length);
    let computerChoice = possibleChoices[randomIndex];
    return computerChoice;
}



function playRound(getComputerChoice,playerPick){
    let winner = null;
    let playerChoice = playerPick;
    let computerChoice = getComputerChoice()

    if (computerChoice == playerChoice){
        console.log("It's a draw!");
    }
    else if ( playerChoice == "rock" && computerChoice== "scissor" ||
              playerChoice == "paper" && computerChoice == "rock" ||
              playerChoice == "scissor" && computerChoice == "paper" 
            ){
        
        winner = "player";
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);

    }
    else {
        winner = "computer";
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    }

    return winner;
}

function playGame(playRound,NUMBER_OF_ROUNDS){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++){
        let winner = playRound(getComputerChoice,playerPick);
        if (winner == "player"){
            playerScore++;
        }
        else if (winner == "computer"){
            computerScore++;
        }
    
    }

    if (playerScore == computerScore){
        return "Its a draw!";
    }
    else if (playerScore > computerScore){
        return "You win!";  
    }  
    else{
        return "Computer wins!";
    }
}


const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");

rockButton.addEventListener("click", () => {
    playRound(getComputerChoice,"rock");
});

paperButton.addEventListener("click", () => {
    playRound(getComputerChoice,"paper");
});

scissorButton.addEventListener("click", () => {
    playRound(getComputerChoice,"scissor");
});

