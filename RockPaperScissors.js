let computerChoice;
let playerChoice;

function getRandomInt(number){
    return Math.floor(Math.random()*number)+1;
    }

function getComputerChoice(){
    let randomNumber = getRandomInt(3);
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    else if(randomNumber === 2) {
        computerChoice = "Paper"
    }
    else if(randomNumber ===3){
        computerChoice = "Scissors"
    }
}

getComputerChoice()
playerChoice = prompt("Choose between Rock, Paper or Scissors")

if(computerChoice === playerChoice){
    console.log("Its a draw");
}

else if(computerChoice === "Rock" && playerChoice === "Scissors"){
    console.log("You, lose");
}

else if(computerChoice === "Paper" && playerChoice === "Rock"){
    console.log("You, lose");
}

else if(computerChoice === "Scissors" && playerChoice === "Paper"){
    console.log("You, lose");
}

else{
    console.log("You won!!");
}

console.log("Computer Picked: " + computerChoice)