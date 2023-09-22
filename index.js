const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
let player;
let computer;
let result;
let playerPoints = 0;
let computerPoints = 0;



choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${player}`;
    computerText.textContent = `Computer : ${computer}`;
    result = checkWinner();
    resultText.textContent = result;
    resultLogs();
    
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}
function resultLogs(){
    if(result == "Draw!"){
    }
    else if( result == "You Win!"){
        playerPoints ++;
    }
    else {
        computerPoints ++;
    }
    playerScore.textContent = `Player Score: ${playerPoints}`;
    computerScore.textContent = `Computer Score: ${computerPoints}`
        
}