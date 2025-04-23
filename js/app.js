// the logic to get the computer choice
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1; // random number between 1 to 3
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      // as a precaution
      return console.error(
        "Error: Unexpected value in getComputerChoice:",
        choice
      );
  }
}


// the logic to get the player choice
function getPlayerChoice() {
  let choice = prompt(`Rock = 1 Paper = 2 Scissor = 3
Choose one:`);
  switch (Number(choice)) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      // as a precaution
      return alert("Error: Unexpected value, choose again.");
  }
}


// Scoring variables
let computerScore = 0
let player = 0


// the logic to play a single round
