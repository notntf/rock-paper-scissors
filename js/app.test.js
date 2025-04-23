// alternatives

// function getComputerChoice with if/else if/else
function getComputerChoiceIfElse() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
      return "Rock";
    } else if (choice === 2) {
      return "Paper";
    } else if (choice === 3) {
      return "Scissors";
    } else {
      // as a precaution
      return console.error(
        "Error: Unexpected value in getComputerChoice:",
        choice
      );
    }
  }
  
  // function getComputerChoice with array
  function getComputerChoiceArray() {
    const opcions = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3); // random number between 0 to 2
    return opcions[index];
  }