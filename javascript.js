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
