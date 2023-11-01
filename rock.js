let playerScore = 0;
let computerScore = 0;
let roundVerdict = "";


const getComputerChoice = function () {
    const options = ['rock', 'paper', 'scissors'];

    //select a random index from the options string above
    const randomIndex = Math.floor(Math.random() * options.length);

    //use the the random index to select an element(rock or paper or scissors)
    const randomChoice = options[randomIndex];

    return randomChoice;
};


const playRound = function (userChoice) {
    let userSelection = userChoice;

    let computerSelection = getComputerChoice();

    if (userSelection === computerSelection) {
        roundVerdict = `It's a tie you chose ${userSelection} computer chose ${computerSelection} `;

        return playerScore += 1;
    }
    else if (userSelection === "rock" && computerSelection === "paper") {

        roundVerdict = `You lose. You chose ${userSelection} computer chose ${computerSelection} `;

        return computerScore += 1;

    }
    else if (userSelection === "paper" && computerSelection === "scissors") {

        roundVerdict = `You lose. You chose ${userSelection} computer chose ${computerSelection} `;

        return computerScore += 1;


    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        roundVerdict = `You lose. You chose ${userSelection} computer chose ${computerSelection} `;

        return computerScore = + 1;
    };

};

//get the choice
const choices = document.querySelectorAll('.action');
const resetBtn = document.querySelector("#reset");

choices.forEach(function (choice) {
    choice.addEventListener('click', () => {
        const clickedOption = choice.innerText.toLowerCase();
        playRound(clickedOption);

        const playerScores = document.querySelector('#playerScores');
        const computerScores = document.querySelector('#computerScores');
        const verdict = document.querySelector('#result');

        playerScores.innerText = playerScore;
        computerScores.innerText = computerScore;
        verdict.innerText = roundVerdict;

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                verdict.innerText = "You won!!!"
                verdict.setAttribute("style", "color: green");
            }
            else {
                verdict.innerText = "You lost!!!"
                verdict.setAttribute("style", "color: red");
            }

        }
    });
})


resetBtn.addEventListener('click', () => {
    location.reload();
})



