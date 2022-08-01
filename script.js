//  input Player Selection
// let playerSelection = prompt("Enter: sword, lance or axe");
// Random Computer Choice
const options = ["sword", "lance", "axe"];
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}
function restart() {
  let roundResult = "";
  let playerSelection = "";
  let computerSelection = "";
}

let draw = 0;
let pWin = 0;
let cWin = 0;

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

// function game() {
//   // for (let i = 0; i < 5; i++) {
//   // let playerSelection = prompt("Enter: sword, lance or axe");
//   const computerSelection = getComputerChoice();
//   const currentRound = playRound(playerSelection, computerSelection);
//   console.log(currentRound);
//   // }
// }
// console.log(game());

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
});

function score() {
  const dScoreContainer = document.querySelector("#dScoreContainer");
  const dScore = document.createElement("p");
  dScore.classList.add("dScore");
  dScore.textContent = 'Draws: ' + draw;
  dScoreContainer.appendChild(dScore);

  const pScoreContainer = document.querySelector("#pScoreContainer");
  const pScore = document.createElement("p");
  pScore.classList.add("pScore");
  pScore.textContent = 'Player: ' + pWin;
  pScoreContainer.appendChild(pScore);

  const cScoreContainer = document.querySelector("#cScoreContainer");
  const cScore = document.createElement("p");
  cScore.classList.add("cScore");
  cScore.textContent = 'CPU: ' + cWin;
  cScoreContainer.appendChild(cScore);

  btnSword.addEventListener("click", function () {
    dScore.remove();
    pScore.remove();
    cScore.remove();
  });
}
