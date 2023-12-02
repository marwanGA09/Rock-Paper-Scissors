// Author Adem Kedir;
// Nov 25 2023

console.log("js is connected to index html");

const gameValue = ["rock", "paper", "scissors"];

// getComputerChoice

// function to check who win the game
function playGame(computerSelection, playerSelection) {
  let winOrLose;

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      winOrLose = "You lose";
    } else if (computerSelection === "paper") {
      winOrLose = "You win";
    } else {
      winOrLose = "draw";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      winOrLose = "You win";
    } else if (computerSelection === "scissors") {
      winOrLose = "you lose";
    } else {
      winOrLose = "draw";
    }
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      winOrLose = "you lose";
    } else if (computerSelection === "scissors") {
      winOrLose = "you win";
    } else {
      winOrLose = "draw";
    }
  }

  return winOrLose;
}

// game() plays five times then display the winner
function game() {
  let count = 1;
  while (count <= 5) {
    const computerSelection = gameValue[Math.floor(Math.random() * 3)];
    console.log("computer selection " + computerSelection);
    let playerSelection = prompt(
      `Please choose one: ${gameValue.slice(0, 2).join(", ")} or ${
        gameValue[2]
      }`
    ).toLocaleLowerCase();
    while (!gameValue.includes(playerSelection)) {
      playerSelection = prompt(
        `${playerSelection} is not valid!!!
    Please choose one again: ${gameValue.slice(0, 2).join(", ")} or ${
          gameValue[2]
        }`
      ).toLocaleLowerCase();
    }
    console.log("player selection " + playerSelection);
    playerWOrL = playGame(computerSelection, playerSelection);
    console.log("player: " + playerWOrL);
    console.log("*****************************");
    count++;
  }
}

// calling a game to start
game();
gi;
