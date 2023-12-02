// Author Adem Kedir;
// Nov 25 2023

const gameValue = ["rock", "paper", "scissors"];

const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", (event) => {
  const computerSelection = gameValue[Math.floor(Math.random() * 3)];
  event.target.textContent = `Select one from the left \n <==`;

  const playerOne = document.querySelector(".player-one");
  let playerSelection;
  playerOne.addEventListener("click", (event) => {
    let card = event.target.getAttribute("id");
    if (card == "rock") {
      playerSelection = card;
    } else if (card == "paper") {
      playerSelection = card;
    } else if (card == "scissors") {
      playerSelection = card;
    } else {
      playBtn.textContent = "select one from the image";
    }

    console.log("Card");
    console.log(card);
    console.log("player one");
    console.log(playerOne);
    console.log("computer selection");
    console.log(computerSelection);
    console.log("player selection");
    console.log(playerSelection);

    const playerContainer = document.querySelector(".player-one-choice");
    const playerImg = document.querySelector(".player-one-choice img");
    const computerContainer = document.querySelector(".player-two-choice");
    const computerImg = document.querySelector(".player-two-choice img");

    if (playerSelection == "rock") {
      playerImg.setAttribute("src", "./img/rock.jpg");
    } else if (playerSelection == "paper") {
      playerImg.setAttribute("src", "./img/paper or.jpg");
    } else {
      playerImg.setAttribute("src", "./img/scissors.jpg");
    }

    if (computerSelection == "rock") {
      computerImg.setAttribute("src", "./img/rock.jpg");
    } else if (computerSelection == "paper") {
      computerImg.setAttribute("src", "./img/paper or.jpg");
    } else {
      computerImg.setAttribute("src", "./img/scissors.jpg");
    }

    playerContainer.classList.remove("hidden");
    computerContainer.classList.remove("hidden");
    console.log("playerImg  " + playerImg);
    console.log("computerImg  " + computerImg);
  });
});
// getComputerChoice dd

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
// game();
