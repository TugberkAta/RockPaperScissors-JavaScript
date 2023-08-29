let computerChoice;
let playerChoice;

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

getComputerChoice()

playerChoice = prompt("Choose between Rock, Paper or Scissors").toLowerCase()

while(playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper"){
    console.log("Please Enter a Correct Input");
    playerChoice = prompt("Choose between Rock, Paper or Scissors").toLowerCase()
}

 if(computerChoice === playerChoice){
    console.log("Its a draw");
}

else if(computerChoice === "rock" && playerChoice === "scissors"){
    console.log("You, lose");
}

else if(computerChoice === "paper" && playerChoice === "rock"){
    console.log("You, lose");
}

else if(computerChoice === "scissors" && playerChoice === "paper"){
    console.log("You, lose");
}

else{
    console.log("You won!!");
}

console.log("Computer Picked: " + capitalize(computerChoice))