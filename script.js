//  input Player Selection
// let playerSelection = prompt("Enter: sword, lance or axe");
// Random Computer Choice
const options = ["sword", "lance", "axe"];
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let roundResult = "";

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

// // test
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

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
  if (playerSelection == computerSelection) {
    roundResult = "Draw";
  } else if (playerSelection == "sword" && computerSelection == "lance") {
    roundResult =
      "You Lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == "sword" && computerSelection == "axe") {
    roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
  }
  console.log(roundResult);
});

const pSelect = document.querySelector('#pSelect');
pSelect.textContent = roundResult;