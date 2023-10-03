"use strict";
//initial state of game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//display message function
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

// when player checks guess
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(document.querySelector(".guess").value);
  //   console.log(typeof guessValue);
  if (!guessValue) {
    displayMessage("No Number");
  }
  // when guess is correct
  else if (guessValue === secretNumber) {
    message.textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is wrong
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessValue > secretNumber ? "Number is too high!" : "Number is too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// when player resets game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#fff";
});
