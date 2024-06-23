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