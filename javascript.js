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

//This plays a best of 5 game of rock paper scissors
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice === 'Paper' && computerChoice === 'Rock'){
            alert('Paper covers rock! You win this round!');
            humanScore = humanScore + 1;
            return;
        }else if(humanChoice === 'Paper' && computerChoice === 'Scissors'){
            alert('Scissors cuts paper! You lose this round!');
            computerScore = computerScore + 1;
            return;
        }else if(humanChoice === 'Rock' && computerChoice === 'Paper'){
            alert('Paper covers rock! You lose this round!');
            computerScore = computerScore + 1;
            return;
        }else if(humanChoice === 'Rock' && computerChoice === 'Scissors'){
            alert('Rock smashes scissors! You win this round!');
            humanScore = humanScore + 1;
            return;
        }else if(humanChoice === 'Scissors' && computerChoice === 'Paper'){
            alert('Scissors cuts paper! You win this round!');
            humanScore = humanScore + 1;
            return;
        }else if(humanChoice === 'Scissors' && computerChoice === 'Rock'){
            alert('Rock smashes scissors! You lose this round!');
            computerScore = computerScore + 1;
            return;
        }else if(humanChoice === computerChoice){
            alert('Tie! Try again!');
            return;
        }
    }

//This loop iterates through 5 rounds of rock, paper, scissors and prints the result of the game to the console.
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log("You win the game!");
        console.log("Final Score: You - " + humanScore + " Computer - " + computerScore + "!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
        console.log("Final Score: You - " + humanScore + " Computer - " + computerScore + "!");
    } else {
        console.log("No one wins :(");
        console.log("Final Score: You - " + humanScore + " Computer - " + computerScore + " Ties - " + (5 - (computerScore + humanScore)));
    }
}

playGame();