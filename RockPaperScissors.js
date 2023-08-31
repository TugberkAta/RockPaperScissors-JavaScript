let computerChoice;
let playerChoice;
let gameRound = 0;
let score = 0;

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

 if(computerChoice === playerChoice){
    console.log("Its a draw");
}

else if(computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "rock"
|| computerChoice === "scissors" && playerChoice === "paper"){
    console.log("You, lose");
}

else{
    console.log("You won!!");
    score++;
}

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
const div = document.createElement("div")
const result = document.createElement("p")

function updateResultText(){
result.textContent = "Computer Picked: " + capitalize(computerChoice) +"\nScore: " + score +"\nGame Round: " + gameRound
}
document.body.appendChild(div);
div.append(result);
