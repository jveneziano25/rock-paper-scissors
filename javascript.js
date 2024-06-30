//Function to get a random choice of rock paper or scissors for the computer's choice
function getComputerChoice(choice){
    let num = Math.random();
    
    if (num < .333){
        let choice = 'Rock';
        return choice;
    } else if ((num >= .333) && (num < .666)){
        let choice = 'Paper';
        return choice;
    } else {
        let choice = 'Scissors';
        return choice;
    }
}

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'Paper' && computerChoice === 'Rock'){
        humanScore++;
    } else if(humanChoice === 'Paper' && computerChoice === 'Scissors'){
        computerScore++;
    } else if(humanChoice === 'Rock' && computerChoice === 'Paper'){
        computerScore++;
    } else if(humanChoice === 'Rock' && computerChoice === 'Scissors'){
        humanScore++;
    } else if(humanChoice === 'Scissors' && computerChoice === 'Paper'){
        humanScore++;
    } else if(humanChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore++;
    } else if(humanChoice === computerChoice){
        return;
    }
}

function chooseRock(){
    humanChoice = 'Rock';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);
    checkWinner(humanScore, computerScore);
}

function choosePaper(){
    humanChoice = 'Paper';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);
    checkWinner(humanScore, computerScore);
}

function chooseScissors(){
    humanChoice = 'Scissors';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);
    checkWinner(humanScore, computerScore);
}

function checkWinner(humanScore, computerScore){
    if(!(humanScore > 2 || computerScore > 2)) {
        if(humanScore === 2) {
            let newDiv = document.createElement("div");
            let container = document.getElementById("buttons");
            newDiv.textContent = 'You\'ve reached 2 points! You win!';
            container.appendChild(newDiv);
            rockBtn.removeEventListener("click", chooseRock);
            paperBtn.removeEventListener("click", choosePaper);
            scissorsBtn.removeEventListener("click", chooseScissors);
        }else if (computerScore === 2){
            let newDiv = document.createElement("div");
            let container = document.getElementById("buttons");
            newDiv.textContent = 'The computer has reached 2 points! You lose!';
            container.appendChild(newDiv);
            rockBtn.removeEventListener("click", chooseRock);
            paperBtn.removeEventListener("click", choosePaper);
            scissorsBtn.removeEventListener("click", chooseScissors);
        }else{
            let newDiv = document.createElement("div");
            let container = document.getElementById("buttons");
            newDiv.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore + '.');
            container.appendChild(newDiv);
        }
    }
    
}

let rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", chooseRock);

let paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", choosePaper);

let scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", chooseScissors);