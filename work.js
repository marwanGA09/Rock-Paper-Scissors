// Author Adem Kedir;
// Nov 25 2023
// Edited Dec 2-3 2024

const gameValue = ["rock", "paper", "scissors"];

function playGame(computerSelection, playerSelection) {
  let winOrLose;

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      winOrLose = "You Lose";
    } else if (computerSelection === "paper") {
      winOrLose = "You Win";
    } else {
      winOrLose = "Draw";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      winOrLose = "You Win";
    } else if (computerSelection === "scissors") {
      winOrLose = "you Lose";
    } else {
      winOrLose = "Draw";
    }
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      winOrLose = "You Lose";
    } else if (computerSelection === "scissors") {
      winOrLose = "You Win";
    } else {
      winOrLose = "Draw";
    }
  }

  return winOrLose;
}

const playBtn = document.querySelector(".play-btn");
const playBtnText = document.querySelector(".play-btn h2");
const playerOne = document.querySelector(".player-one");

const playerContainer = document.querySelector(".player-one-choice");
const playerImg = document.querySelector(".player-one-choice img");
const computerContainer = document.querySelector(".player-two-choice");
const computerImg = document.querySelector(".player-two-choice img");

const winOrLose = document.querySelector(".winner-display");
const winOrLoseText = document.querySelector(".winner-display  h2");
const replayGame = document.querySelector(".replay-btn");
const exitBtn = document.querySelector(".exit");

function startingState() {
  playerContainer.classList.add("hidden");
  computerContainer.classList.add("hidden");
  playBtn.classList.remove("hidden");
  winOrLose.classList.add("hidden");
  replayGame.classList.add("hidden");
  exitBtn.classList.add("exit");
  winOrLose.setAttribute("style", "");
}

playBtn.addEventListener("click", (event) => {
  playBtn.textContent = `Select one from the left \n <~~`;
  const computerSelection = gameValue[Math.floor(Math.random() * 3)];
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
      playerSelection = gameValue[Math.floor(Math.random() * 3)];
    }

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
    playBtn.classList.add("hidden");
    winOrLose.classList.remove("hidden");
    replayGame.classList.remove("hidden");
    exitBtn.classList.remove("hidden");

    winOrLoseText.textContent = playGame(computerSelection, playerSelection);

    if (winOrLoseText.textContent == "You Win") {
      winOrLose.setAttribute("style", "background-color:rgb(0, 189, 0)");
    } else if (winOrLoseText.textContent == "You Lose") {
      winOrLose.setAttribute("style", "background-color: rgb(255, 0, 0)");
    } else if (winOrLoseText.textContent == "Draw") {
      winOrLose.setAttribute("style", "background-color:#ffff00");
    }

    replayGame.addEventListener("click", () => {
      startingState();
    });
  });
});

exitBtn.addEventListener("click", () => {
  document.location.reload();
});
