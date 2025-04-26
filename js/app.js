// the logic to get the computer choice
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1; // random number between 1 to 3
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// the logic to get the human choice
function getHumanChoice() {
  let choice = prompt('Choose one: "rock" "paper" "scissors"');
  switch (choice.toLowerCase()) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

// Scoring variables
let computerScore;
let humanScore;

// the logic to play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return console.log("It's a tie🤝!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    ++humanScore;
    return console.log("You won💪! rock🪨 beats scissors✂️");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    return console.log("You won🎉 ! paper📃 beats rock🪨");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    ++humanScore;
    return console.log("You won😎! scissors✂️ beats paper📃");
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    ++computerScore;
    return console.log("You lose😥! rock🪨 beats scissors✂️");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    ++computerScore;
    return console.log("You lose😥! paper📃 beats rock🪨");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    ++computerScore;
    return console.log("You lose💔! scissors✂️ beats paper📃");
  }
}

// the logic to play the entire game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
  }

  console.log("Game Over");
  if (humanScore > computerScore) {
    console.log(`You win the game🏆!!! Final Score: ${humanScore}-${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game🤦🏻! Final Score: ${humanScore}-${computerScore}`);
  } else {
    console.log(`It's a tie game🤝! Final Score: ${humanScore}-${computerScore}`);
  }
}
