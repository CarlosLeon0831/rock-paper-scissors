//  input Player Selection
// let playerSelection = prompt("Enter: sword, lance or axe");
// Random Computer Choice
const options = ["sword", "lance", "axe"];
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let roundResult = "";
let winner = "";

function playRound(playerSelection, computerSelection) {
  // if both selections are the same
  if (playerSelection == computerSelection) {
    roundResult = "Draw";
    // if the computer's selection wins
  } else if (
    (playerSelection == "sword" && computerSelection == "lance") ||
    (playerSelection == "lance" && computerSelection == "axe") ||
    (playerSelection == "axe" && computerSelection == "sword")
  ) {
    roundResult =
      "You Lose! " + computerSelection + " beats " + playerSelection;
    // if the player's selection wins
  } else if (
    (playerSelection == "sword" && computerSelection == "axe") ||
    (playerSelection == "lance" && computerSelection == "sword") ||
    (playerSelection == "axe" && computerSelection == "lance")
  ) {
    roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
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

  const results = document.querySelector("#results");
  const pSelect = document.createElement("p");
  pSelect.classList.add("pSelect");
  pSelect.textContent = `Player: ${playerSelection}`;
  results.appendChild(pSelect);

  const cSelect = document.createElement("p");
  cSelect.classList.add("cSelect");
  cSelect.textContent = `CPU: ${computerSelection}`;
  results.insertBefore(cSelect, pSelect);

  const matchResult = document.createElement("p");
  matchResult.classList.add("matchResult");
  matchResult.textContent = `${roundResult}`
  results.insertBefore(matchResult, cSelect)
});
