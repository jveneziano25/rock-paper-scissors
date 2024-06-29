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

let humanChoice = '';
let computerChoice = '';
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'Paper' && computerChoice === 'Rock'){
        console.log('Paper covers rock! You win this round!');
        humanScore = humanScore + 1;
        return humanScore;
    }else if(humanChoice === 'Paper' && computerChoice === 'Scissors'){
        console.log('Scissors cuts paper! You lose this round!');
        computerScore = computerScore + 1;
        return ;
    }else if(humanChoice === 'Rock' && computerChoice === 'Paper'){
        console.log('Paper covers rock! You lose this round!');
        computerScore = computerScore + 1;
        return;
    }else if(humanChoice === 'Rock' && computerChoice === 'Scissors'){
        console.log('Rock smashes scissors! You win this round!');
        humanScore = humanScore + 1;
        return;
    }else if(humanChoice === 'Scissors' && computerChoice === 'Paper'){
        console.log('Scissors cuts paper! You win this round!');
        humanScore = humanScore + 1;
        return;
    }else if(humanChoice === 'Scissors' && computerChoice === 'Rock'){
        console.log('Rock smashes scissors! You lose this round!');
        computerScore = computerScore + 1;
        return;
    }else if(humanChoice === computerChoice){
        console.log('Tie! Try again!');
        return;
    }
}

function chooseRock(){
    humanChoice = 'Rock';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
}

function choosePaper(){
    humanChoice = 'Paper';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
}

function chooseScissors(){
    humanChoice = 'Scissors';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
}
function updateHumanScore(score){
    humanScore++;
}
function updateCompScore(score){
    computerScore++;
}
function gameWinner(humanScore, computerScore){
    if(humanScore = 5){
        console.log('You Win!')
    } else if(computerScore = 5) {
        console.log('You lose!')
    }
}
let rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", chooseRock);

let paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", choosePaper);

let scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", chooseScissors);