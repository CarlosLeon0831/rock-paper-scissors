// Random Computer Choice
const options = ["sword", "lance", "axe"];
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let draw = 0;
let pWin = 0;
let cWin = 0;
let winner = "";
let finalResult = "";

function reset() {
  draw = 0;
  pWin = 0;
  cWin = 0;
}

function playRound(playerSelection, computerSelection) {
  // if both selections are the same
  if (playerSelection == computerSelection) {
    roundResult = "Draw";
    draw = draw + 1;
    // if the computer's selection wins
  } else if (
    (playerSelection == "sword" && computerSelection == "lance") ||
    (playerSelection == "lance" && computerSelection == "axe") ||
    (playerSelection == "axe" && computerSelection == "sword")
  ) {
    roundResult =
      "You Lose! " + computerSelection + " beats " + playerSelection;
    cWin = cWin + 1;
    // if the player's selection wins
  } else if (
    (playerSelection == "sword" && computerSelection == "axe") ||
    (playerSelection == "lance" && computerSelection == "sword") ||
    (playerSelection == "axe" && computerSelection == "lance")
  ) {
    roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
    pWin = pWin + 1;
  }
}

// DOM Manipulation

const btnSword = document.querySelector("#btnSword");
btnSword.addEventListener("click", function () {
  let playerSelection = "sword";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
  console.log(roundResult);

  const pSelectContainer = document.querySelector("#pSelectContainer");
  const pSelect = document.createElement("p");
  pSelect.classList.add("pSelect");
  pSelect.textContent = `Player: ${playerSelection}`;
  pSelectContainer.appendChild(pSelect);

  const cSelectContainer = document.querySelector("#cSelectContainer");
  const cSelect = document.createElement("p");
  cSelect.classList.add("cSelect");
  cSelect.textContent = `CPU: ${computerSelection}`;
  cSelectContainer.appendChild(cSelect);

  const matchResultContainer = document.querySelector("#matchResultContainer");
  const matchResult = document.createElement("p");
  matchResult.classList.add("matchResult");
  matchResult.textContent = `${roundResult}`;
  matchResultContainer.appendChild(matchResult);

  score();

  btnSword.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

  btnAxe.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

  btnLance.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

});

const btnAxe = document.querySelector("#btnAxe");
btnAxe.addEventListener("click", function () {
  let playerSelection = "axe";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
  console.log(roundResult);

  const pSelectContainer = document.querySelector("#pSelectContainer");
  const pSelect = document.createElement("p");
  pSelect.classList.add("pSelect");
  pSelect.textContent = `Player: ${playerSelection}`;
  pSelectContainer.appendChild(pSelect);

  const cSelectContainer = document.querySelector("#cSelectContainer");
  const cSelect = document.createElement("p");
  cSelect.classList.add("cSelect");
  cSelect.textContent = `CPU: ${computerSelection}`;
  cSelectContainer.appendChild(cSelect);

  const matchResultContainer = document.querySelector("#matchResultContainer");
  const matchResult = document.createElement("p");
  matchResult.classList.add("matchResult");
  matchResult.textContent = `${roundResult}`;
  matchResultContainer.appendChild(matchResult);

  score();

  btnAxe.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

  btnSword.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

  btnLance.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

});

const btnLance = document.querySelector("#btnLance");
btnLance.addEventListener("click", function () {
  let playerSelection = "lance";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
  console.log(roundResult);

  const pSelectContainer = document.querySelector("#pSelectContainer");
  const pSelect = document.createElement("p");
  pSelect.classList.add("pSelect");
  pSelect.textContent = `Player: ${playerSelection}`;
  pSelectContainer.appendChild(pSelect);

  const cSelectContainer = document.querySelector("#cSelectContainer");
  const cSelect = document.createElement("p");
  cSelect.classList.add("cSelect");
  cSelect.textContent = `CPU: ${computerSelection}`;
  cSelectContainer.appendChild(cSelect);

  const matchResultContainer = document.querySelector("#matchResultContainer");
  const matchResult = document.createElement("p");
  matchResult.classList.add("matchResult");
  matchResult.textContent = `${roundResult}`;
  matchResultContainer.appendChild(matchResult);

  score();

  btnAxe.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

  btnSword.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

  btnLance.addEventListener("click", function () {
    pSelect.remove();
    cSelect.remove();
    matchResult.remove();
  });

});

function score() {
  const dScoreContainer = document.querySelector("#dScoreContainer");
  const dScore = document.createElement("p");
  dScore.classList.add("dScore");
  dScore.textContent = "Draws: " + draw;
  dScoreContainer.appendChild(dScore);

  const pScoreContainer = document.querySelector("#pScoreContainer");
  const pScore = document.createElement("p");
  pScore.classList.add("pScore");
  pScore.textContent = "Player: " + pWin;
  pScoreContainer.appendChild(pScore);

  const cScoreContainer = document.querySelector("#cScoreContainer");
  const cScore = document.createElement("p");
  cScore.classList.add("cScore");
  cScore.textContent = "CPU: " + cWin;
  cScoreContainer.appendChild(cScore);

  if (cWin >= 5) {
    finalResult = "YOU LOSE...";
    reset();
    resetPage();
  }
  if (pWin >= 5) {
    finalResult = "YOU WIN!";
    reset();
    resetPage();
  }

  btnSword.addEventListener("click", function () {
    dScore.remove();
    pScore.remove();
    cScore.remove();
  });

  btnAxe.addEventListener("click", function () {
    dScore.remove();
    pScore.remove();
    cScore.remove();
  });

  btnLance.addEventListener("click", function () {
    dScore.remove();
    pScore.remove();
    cScore.remove();
  });

}

function resetPage() {
  const resetPage = document.querySelector("#resetPage");
  const resetText = document.createElement("div");
  resetText.classList.add("resetText");
  resetText.textContent = `${finalResult}`;
  resetPage.appendChild(resetText);

  const resetButton = document.querySelector("#resetButton");
  const rButton = document.createElement("button");
  rButton.classList.add("rButton");
  rButton.textContent = "Try Again";
  resetButton.appendChild(rButton);

  rButton.addEventListener("click", function () {
    location.reload();
  });
}
