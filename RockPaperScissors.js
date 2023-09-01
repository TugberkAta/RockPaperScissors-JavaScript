let computerChoice;
let playerChoice;
let gameRound = 0;
let userScore = 0;
let winner = "";
let computerScore = 0;

function getRandomInt(number){
    return Math.floor(Math.random()*number)+1;
    }

function getComputerChoice(){
    let randomNumber = getRandomInt(3);
    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    else if(randomNumber === 2) {
        computerChoice = "paper"
    }
    else if(randomNumber ===3){
        computerChoice = "scissors"
    }
}

function capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1)
}

function gameLogic(){

getComputerChoice()

gameRound++;
updateResultText()

}


const rock = document.querySelector("#rock")
rock.addEventListener("click", () =>{
    playerChoice="rock";
    gameLogic()
});

const paper = document.querySelector("#paper")
paper.addEventListener("click", () =>{
    playerChoice="paper";
    gameLogic()
});

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () =>{
    playerChoice="scissors";
    gameLogic()
});

const body = document.body
const computerResult = document.querySelector("#computerResult")
const computerPick = document.createElement("p")
const scoreBoard = document.querySelector("#Score")
const result = document.createElement("p")
const botResult = document.createElement("p")
const compPaper = document.querySelector("#compPaper")
const compScissors = document.querySelector("#compScissors")
const compRock = document.querySelector("#compRock")
const won = document.querySelector("#won")
const lost = document.querySelector("#lost")

result.textContent = "Player score: " + userScore
botResult.textContent = "Computer score: " + computerScore
computerPick.textContent = "Waiting...";
won.style.cssText = "opacity: 0;";
lost.style.cssText = "opacity: 0;";

function resetGame(){
    gameRound = 0;
    userScore = 0;
    winner = "";
    computerScore = 0;
    compPaper.style.cssText = "opacity: 1;"
    compScissors.style.cssText = "opacity: 1;"
    compRock.style.cssText = "opacity: 1;"
    computerPick.textContent = "Waiting...";
    won.style.cssText = "opacity: 0;";
    lost.style.cssText = "opacity: 0;";
}


function updateResultText(){

    compPaper.style.cssText = "opacity: 1;"
    compScissors.style.cssText = "opacity: 1;"
    compRock.style.cssText = "opacity: 1;"

    if(computerChoice === playerChoice){
        won.style.cssText = "opacity: 0;";
        lost.style.cssText = "opacity: 0;";
    }

    else if(computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "rock"
    || computerChoice === "scissors" && playerChoice === "paper"){
       
        computerScore++;
        lost.style.cssText = "opacity: 1;"
        won.style.cssText = "opacity: 0;";
    }
    
    else{
       
        userScore++;
        won.style.cssText = "opacity: 1;";
        lost.style.cssText = "opacity: 0;"
    }

    if(computerChoice === "rock"){
        compPaper.style.cssText = "opacity: 0;"
        compScissors.style.cssText = "opacity: 0;"
    }

    else if(computerChoice === "paper"){
        compScissors.style.cssText = "opacity: 0;"
        compRock.style.cssText = "opacity: 0;"
    }

    else if(computerChoice === "scissors"){
        compRock.style.cssText = "opacity: 0;"
        compPaper.style.cssText = "opacity: 0;"
    }

    if(computerScore === 3 || userScore === 3){
        if (userScore ===3){
            alert("Congrats You Won!!")
        }
        else{
            alert("Sorry You Lost :(")
        }
         resetGame()
    }


    computerPick.textContent = capitalize(computerChoice);
    result.textContent = "Player score: " + userScore
    botResult.textContent = "Computer score: " + computerScore
}

computerResult.append(result);
computerResult.append(computerPick);
scoreBoard.append(result);
scoreBoard.append(botResult);
