let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
	return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, compGuess, secretTarget) => {
	if (
		Math.abs(userGuess - secretTarget) <= Math.abs(compGuess - secretTarget)
	) {
		return true;
	} else {
		return false;
	}
};

const updateScore = (winner) => {
	if (winner === "computer") {
		computerScore++;
	} else {
		humanScore++;
	}
};

function advanceRound() {
	currentRoundNumber++;
}
