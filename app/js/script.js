const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".game__score-board");
const result_div = document.querySelector(".game__result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scrissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  console.log("zz " + userChoice);
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scrissors_div.addEventListener("click", () => {
    game("s");
  });
}

main();
