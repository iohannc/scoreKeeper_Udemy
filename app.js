// Get elements
const playerOneScore = document.querySelector("#pl1-score");
const playerTwoScore = document.querySelector("#pl2-score");
const playerOneScoreButton = document.querySelector("#pl1-scorebutton");
const playerTwoScoreButton = document.querySelector("#pl2-scorebutton");
const resetButton = document.querySelector("#resetbutton");
const scoreLimit = document.querySelector("#score-limit");

// Set score limit
scoreLimit.value = 5; // Resets value with each reload.
let scoreLimitValue = scoreLimit.value;
scoreLimit.addEventListener("input", () => {
  scoreLimitValue = scoreLimit.value;
  resetButton.click();
});

// Linking buttons to score board
playerOneScoreButton.addEventListener("click", () => {
  let currentScore = playerOneScore.textContent;
  if (currentScore != scoreLimitValue) {
    let newScore = Number(currentScore) + 1;
    playerOneScore.textContent = newScore;
  }
  if (playerOneScore.textContent == scoreLimitValue) {
    playerOneScore.classList.add("winner");
    playerTwoScore.classList.add("loser");
    playerOneScoreButton.disabled = true;
    playerTwoScoreButton.disabled = true;
  }
});

playerTwoScoreButton.addEventListener("click", () => {
  let currentScore = playerTwoScore.textContent;
  if (currentScore != scoreLimitValue) {
    let newScore = Number(currentScore) + 1;
    playerTwoScore.textContent = newScore;
  }
  if (playerTwoScore.textContent == scoreLimitValue) {
    playerTwoScore.classList.add("winner");
    playerOneScore.classList.add("loser");
    playerOneScoreButton.disabled = true;
    playerTwoScoreButton.disabled = true;
  }
});

resetButton.addEventListener("click", () => {
  playerOneScore.innerText = "0";
  playerTwoScore.innerText = "0";
  if (playerOneScore.classList.contains("winner")) {
    playerOneScore.classList.remove("winner");
  } else if (playerOneScore.classList.contains("loser")) {
    playerOneScore.classList.remove("loser");
  }
  if (playerTwoScore.classList.contains("winner")) {
    playerTwoScore.classList.remove("winner");
  } else if (playerTwoScore.classList.contains("loser")) {
    playerTwoScore.classList.remove("loser");
  }
  playerOneScoreButton.disabled = false;
  playerTwoScoreButton.disabled = false;
});
