// Get elements
const playerOneScore = document.querySelector("#pl1-score");
const playerTwoScore = document.querySelector("#pl2-score");
const playerOneScoreButton = document.querySelector("#pl1-scorebutton");
const playerTwoScoreButton = document.querySelector("#pl2-scorebutton");
const resetButton = document.querySelector("#resetbutton");

// Linking buttons to score board
playerOneScoreButton.addEventListener("click", () => {
  let currentScore = playerOneScore.innerText;
  if (currentScore !== "5") {
    let newScore = Number(currentScore) + 1;
    playerOneScore.innerText = newScore;
  }
});

playerTwoScoreButton.addEventListener("click", () => {
  let currentScore = playerTwoScore.innerText;
  if (currentScore !== "5") {
    let newScore = Number(currentScore) + 1;
    playerTwoScore.innerText = newScore;
  }
});

resetButton.addEventListener("click", () => {
  playerOneScore.innerText = "0";
  playerTwoScore.innerText = "0";
});
