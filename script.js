"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector(".message");
let score = 20;
let highScore = 0;
// guessValue = 23;
console.log(score);

// Event passed in only runs when the button is clicked
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(document.querySelector(".guess").value);
  //   console.log(typeof guessValue);
  if (!guessValue) {
    message.textContent = "No number!";
  }
  // When player wins
  else if (guessValue === secretNumber) {
    message.textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      message.textContent = "Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game";
    }
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      message.textContent = "Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#fff";
});
