let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";
let moveList = ["Rock", "Paper", "Scissors"];

let playerWins = 0;
let computerWins = 0;

function startGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
}

function endGame() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}

function randMove() {
  return Math.floor(Math.random() * 3);
}

function playRound(event) {
  let playerMove = event.target.textContent;
  let computerMove = moveList[randMove()];

  let result = getResult(playerMove, computerMove);

  updateMoveDisplay(playerMove, computerMove);

  if (result === "win") {
    statusDisplay.textContent = winMsg;
  } else if (result === "lose") {
    statusDisplay.textContent = loseMsg;
  } else {
    statusDisplay.textContent = tieMsg;
  }
  
}

function getResult(playerMove, computerMove) {
  if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    return "win";
  } else if (playerMove === computerMove) {
    return "tie";
  } else {
    return "lose";
  }
}

function updateMoveDisplay(playerMove, computerMove) {
  moveDisplays[0].textContent = `Player move was ${playerMove}.`;
  moveDisplays[1].textContent = `Computer move was ${computerMove}.`;
}

let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

statusDisplay.textContent = "Choose Your Move";

startGame();