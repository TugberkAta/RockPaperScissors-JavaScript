let computerChoice;

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
    console.log(computerChoice)
}

getComputerChoice()

