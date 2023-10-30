let playerScore = 0;
let computerScore = 0;


let getComputerChoice = function () {
    const options = ['rock', 'paper', 'scissors'];

    //select a random index from the options string above
    const randomIndex = Math.floor(Math.random() * options.length);

    //use the the random index to select an element(rock or paper or scissors)
    const randomChoice = options[randomIndex];

    return randomChoice;
};

let getUserChoice = function () {
    return prompt("Enter your choice: ");
};

const playRound = function () {
    let userSelection = getUserChoice();

    let computerSelection = getComputerChoice();

    if (userSelection === computerSelection) {
        alert(`It's a tie you chose ${userSelection} computer chose ${computerSelection} `);

        return playerScore += 1;
    }
    else if (userSelection === "rock" && computerSelection === "paper") {

        alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `);

        return computerScore += 1;

    }
    else if (userSelection === "paper" && computerSelection === "scissors") {

        alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `);

        return computerScore += 1;


    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `);

        return computerScore = + 1;
    };

};

for (let i = 0; i < 6; i++) {
    playRound();

    console.log(computerScore);
    console.log(playerScore);
}

if (playerScore > computerScore) {

    alert("You won! Refresh page to play again");
}
else {

    alert("You lost! Refresh page to try again");
}; 