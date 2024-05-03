// array to store all possible choices //
let possibleChoices = ["rock","paper","scissor"];
const NUMBER_OF_ROUNDS = 5;


function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * possibleChoices.length);
    let computerChoice = possibleChoices[randomIndex];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(getComputerChoice,playerPick){
    let winner = null;
    let playerChoice = playerPick;
    let computerChoice = getComputerChoice()

    if (computerChoice == playerChoice){
        winner = "It's a draw!";
    }
    else if ( playerChoice == "rock" && computerChoice== "scissor" ||
              playerChoice == "paper" && computerChoice == "rock" ||
              playerChoice == "scissor" && computerChoice == "paper" 
            ){
        
        winner = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;

    }
    else {
        winner = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    return {
        "winner":winner,
        "playerChoice":playerChoice,
        "computerChoice":computerChoice,
        "playerScore":playerScore,
        "computerScore":computerScore
    };
}


const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");
const playerChoiceImage = document.querySelector(".playerChoiceImage");
const computerChoiceImage = document.querySelector(".computerChoiceImage");
const roundMessage = document.querySelector(".message");
const playerScoreItem = document.querySelector(".playerScore");
const computerScoreItem = document.querySelector(".computerScore");



function buttonClickHandler(choice){
    roundMessage.style.color = "#171717";

    let results = playRound(getComputerChoice,choice);
    playerChoiceImage.src = "images/" + choice + ".jpg";
    computerChoiceImage.src = "images/" + results.computerChoice + ".jpg";
    roundMessage.textContent = results.winner;
    playerScoreItem.textContent = results.playerScore;
    computerScoreItem.textContent = results.computerScore;
    console.log(roundMessage.textContent);

    if (playerScore >= 5 || computerScore >= 5){
        if (playerScore > computerScore){
            roundMessage.style.color = "white";
            roundMessage.textContent = "Player Wins!!!";
        }
        else{
            roundMessage.style.color = "white";
            roundMessage.textContent = "Computer Wins!!!"
        }
        playerScore = 0;
        computerScore = 0;
    }

}

rockButton.addEventListener("click", () => {buttonClickHandler("rock")});
paperButton.addEventListener("click",() => {buttonClickHandler("paper")});
scissorButton.addEventListener("click",() => {buttonClickHandler("scissor")});

