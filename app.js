var min = 0;
var max = 10;
var winNumber = Math.floor(Math.random() * 10) + 1;
var triesLeft = 3;

var guessBtn = document.querySelector(".guess-btn");
var inputNum = document.querySelector("#guess-number");
var message = document.querySelector(".text");
var overMessage = document.querySelector(".game-over");

guessBtn.addEventListener("click", guessNumber);

function guessNumber() {
  if (inputNum.value == winNumber) {
    message.innerHTML = "YOU WON";
    message.style.color = "green";
    overMessage.style.display = "block";
  } else {
    triesLeft -= 1;
    let hint =
      inputNum.value > winNumber
        ? `The number is smaller `
        : `The number is bigger`;
    message.innerHTML = `${hint} YOU STILL HAVE ${triesLeft} TRIES LEFT `;
    message.style.color = "red";
    message.style.display = "block";

    if (triesLeft == 0) {
      message.innerHTML = `SORRY YOU LOST THE GAME THE NUMBER WAS ${winNumber}`;
      message.style.color = "red";
      overMessage.style.display = "block";
    }
  }
}
overMessage.addEventListener("click", resetGame);
function resetGame() {
  winNumber = Math.floor(Math.random() * 10) + 1;
  triesLeft = 3;
  inputNum.value = "";
  overMessage.style.display = "none";
  message.style.display = "none";
}
