var p1Butt = document.getElementById("p1");
var p2Butt = document.getElementById("p2");
var resetButt = document.getElementById("reset");

var numInput = document.querySelector("input");

var p1Display = document.getElementById("p1ScoreDisplay");
var p2Display = document.getElementById("p2ScoreDisplay");

var winScoreDisplay = document.getElementById("maxScore");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

var winningScore = 5;

p1Butt.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
});

p2Butt.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");

  gameOver = false;
}

resetButt.addEventListener("click", reset);

numInput.addEventListener("change", function () {
  winScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
