const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    return "Error: Please pick rock, paper, or scissors";
  }
};

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  } else if (userChoice === "bomb") {
    return "YOU WIN MR.CHEAT CODE";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won. Paper beats rock :( ";
    } else if (computerChoice === "scissors") {
      return "You won! Rock smashes scissors!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won! Paper covers rock!";
    } else if (computerChoice === "scissors") {
      return "The computer won. Scissors cut paper :(";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won. Rock smashes scissors :(";
    } else if (computerChoice === "paper") {
      return "You won! Scissors cut paper!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("BOMB");
  console.log(`Your choice: ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computers choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
