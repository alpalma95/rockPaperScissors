"use strict";
const rock = "👊";
const paper = "✋";
const scissors = "🖖";
const choices = [rock, paper, scissors];
const winPointer = `⬅🎉`;
const losePointer = `😑➡`;
const tiePointer = `Tie! ↔`;
const modalScreen = document.querySelector(".modal");
const overlayBack = document.querySelector(".overlay");
const game = document.querySelector("#game");

let userSelection;
let computerSelection = function () {
  return choices[Math.floor(Math.random() * choices.length)];
};
let thisRoundComputer;
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const checkWinner = function () {
  if (thisRoundComputer === userSelection) {
    document.querySelector(".pointer").textContent = tiePointer;
  } else if (
    (thisRoundComputer === scissors && userSelection === rock) ||
    (thisRoundComputer === paper && userSelection === scissors) ||
    (thisRoundComputer === rock && userSelection === paper)
  ) {
    document.querySelector(".pointer").textContent = winPointer;
    humanScore++;
    document.querySelector("#human_score").textContent = humanScore;
  } else if (
    (thisRoundComputer === rock && userSelection === scissors) ||
    (thisRoundComputer === scissors && userSelection === paper) ||
    (thisRoundComputer === paper && userSelection === rock)
  ) {
    document.querySelector(".pointer").textContent = losePointer;
    computerScore++;
    document.querySelector("#computer_score").textContent = computerScore;
  }
};

const checkResult = function () {
  if (roundCounter === 5 && computerScore > humanScore) {
    modalScreen.classList.remove("hidden");
    overlayBack.classList.remove("hidden");
    document.querySelector("#modal_title").textContent = "YOU LOSE! 🤦‍♂️";
  } else if (roundCounter === 5 && computerScore < humanScore) {
    modalScreen.classList.remove("hidden");
    overlayBack.classList.remove("hidden");
    document.querySelector("#modal_title").textContent = "YOU WIN YAY 🎉";
  } else if (roundCounter === 5 && computerScore === humanScore) {
    modalScreen.classList.remove("hidden");
    overlayBack.classList.remove("hidden");
    document.querySelector("#modal_title").textContent = "TIE";
  }
};

document.querySelector(".reset").addEventListener("click", function () {
  roundCounter = 0;
  humanScore = 0;
  computerScore = 0;
  document.querySelector("#round").textContent = 0;
  document.querySelector("#human_score").textContent = 0;
  document.querySelector("#computer_score").textContent = 0;
  document.querySelector("#human_choice").textContent = "";
  document.querySelector("#computer_choice").textContent = "";
  document.querySelector(".pointer").textContent = "";
  modalScreen.classList.add("hidden");
  overlayBack.classList.add("hidden");
  game.classList.add("hidden");
});

document.querySelector("#rock").addEventListener("click", function () {
  game.classList.remove("hidden");
  roundCounter++;
  document.querySelector("#round").textContent = roundCounter;

  userSelection = rock;
  document.querySelector("#human_choice").textContent = rock;
  thisRoundComputer = computerSelection();
  document.querySelector("#computer_choice").textContent = thisRoundComputer;
  checkWinner();
  checkResult();
});
document.querySelector("#paper").addEventListener("click", function () {
  game.classList.remove("hidden");
  roundCounter++;
  document.querySelector("#round").textContent = roundCounter;

  userSelection = paper;
  document.querySelector("#human_choice").textContent = paper;
  thisRoundComputer = computerSelection();
  document.querySelector("#computer_choice").textContent = thisRoundComputer;
  checkWinner();
  checkResult();
});
document.querySelector("#scissors").addEventListener("click", function () {
  game.classList.remove("hidden");
  roundCounter++;
  document.querySelector("#round").textContent = roundCounter;

  userSelection = scissors;
  document.querySelector("#human_choice").textContent = scissors;
  thisRoundComputer = computerSelection();
  document.querySelector("#computer_choice").textContent = thisRoundComputer;
  checkWinner();
  checkResult();
});

// add modal for winner
/*if round = 5 && humanScore > computerScore = you win. Case contrary computer win. Case tie, no winner repeat battle
// complex scenario: taking round into consideration for result
 round, user, comp:
if round = 5 && comp > human = comp win
if round = 4 && comp > human && human === comp -2 = comp win
if round = 3 && comp > human && human === comp -3 = comp win
*/
