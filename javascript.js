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

//Prompts player to enter choice and normalizes
function getHumanChoice(choice){
    let input = prompt('Enter Rock, Paper, or Scissors!');
    //This normalizes the user input to make it all lowercase in case user inputs all caps
    input = input.toLowerCase();
    if(input == 'rock'){
        return 'Rock';
    } else if(input == 'paper'){
        return 'Paper';
    } else if (input == 'scissors'){
        return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == 'Paper' && computerChoice == 'Rock'){
        alert('Paper covers rock! You win this round!');
        humanScore = humanScore++;
        return;
    }else if(humanChoice == 'Paper' && computerChoice == 'Scissors'){
        alert('Scissors cuts paper! You lose this round!');
        computerScore = computerScore++;
        return;
    }else if(humanChoice == 'Rock' && computerChoice == 'Paper'){
        alert('Paper covers rock! You lose this round!');
        computerScore = computerScore++;
        return;
    }else if(humanChoice == 'Rock' && computerChoice == 'Scissors'){
        alert('Rock smashes scissors! You win this round!');
        humanScore = humanScore++;
        return;
    }else if(humanChoice == 'Scissors' && computerChoice == 'Paper'){
        alert('Scissors cuts paper! You win this round!');
        humanScore = humanScore++;
        return;
    }else if(humanChoice == 'Scissors' && computerChoice == 'Rock'){
        alert('Rock smashes scissors! You lose this round!');
        computerScore = computerScore++;
        return;
    }else if(humanChoice === computerChoice){
        alert('Tie! Try again!');
        return;
    }
}

//Declares global variables for player and computer choice
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();