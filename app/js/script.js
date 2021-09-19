let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".game__score-board");
let result_p = document.querySelector(".game__text--result");
let resultUser_p = document.querySelector(".game__text--user");
let resultComputer_p = document.querySelector(".game__text--computer");
let hpUser = document.querySelector(".game__hp_bar_user");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scrissors_div = document.getElementById("s");

let nani_user = document.getElementById("nani_user");
let nani_computer = document.getElementById("nani_computer");

//Player choice on click
function main() {
  rock_div.addEventListener("click", () => {
    resultUser_p.style.display = "block";
    resultComputer_p.style.display = "block";

    game("r");
  });

  paper_div.addEventListener("click", () => {
    resultUser_p.style.display = "block";
    resultComputer_p.style.display = "block";
    game("p");
  });

  scrissors_div.addEventListener("click", () => {
    resultUser_p.style.display = "block";
    resultComputer_p.style.display = "block";
    game("s");
  });
}

main();

//random choice for computer
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//Player and comp choices
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    //Win scenarios
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    //lose scenarios
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    //Draw scenarios
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";

  if (letter === "p") return "Paper";

  if (letter === "s") return "Scrissors";
}

//Win, Lose, Draw behaviour
function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;

  computerScore_span.innerHTML = computerScore;

  resultUser_p.innerHTML = `You pick  ${convertToWord(userChoice)}`;
  resultComputer_p.innerHTML = `Enemy picks ${convertToWord(computerChoice)}`;
  result_p.innerHTML = `You Win!`;

  userChoice_div.classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 400);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;

  userScore_span.innerHTML = userScore;

  resultUser_p.innerHTML = `You pick ${convertToWord(userChoice)}`;
  resultComputer_p.innerHTML = `Enemy picks ${convertToWord(computerChoice)}`;
  result_p.innerHTML = `You Lose!`;

  userChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 400);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  resultUser_p.innerHTML = `You pick  ${convertToWord(userChoice)}`;
  resultComputer_p.innerHTML = `Enemy picks ${convertToWord(computerChoice)}`;
  result_p.innerHTML = `Draw!!`;

  userChoice_div.classList.add("gray-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("gray-glow");
  }, 400);
}
