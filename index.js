// Setting up the variables
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset");

currentHomeScore = 0;
currentGuestScore = 0;

homeScore.textContent = 0;
guestScore.textContent = 0;

function hAdd1() {
  currentHomeScore++;
  homeScore.textContent = currentHomeScore;
  console.log(currentHomeScore);
}

function gAdd1() {
  currentGuestScore++;
  guestScore.textContent = currentGuestScore;
  console.log(currentGuestScore);
}

function hAdd2() {
  currentHomeScore += 2;
  homeScore.textContent = currentHomeScore;
  console.log(currentHomeScore);
}

function gAdd2() {
  currentGuestScore += 2;
  guestScore.textContent = currentGuestScore;
  console.log(currentGuestScore);
}

function hAdd3() {
  currentHomeScore += 3;
  homeScore.textContent = currentHomeScore;
  console.log(currentHomeScore);
}

function gAdd3() {
  currentGuestScore += 3;
  guestScore.textContent = currentGuestScore;
  console.log(currentGuestScore);
}

function reset() {
  currentHomeScore = 0;
  currentGuestScore = 0;
  homeScore.textContent = currentHomeScore;
  guestScore.textContent = currentGuestScore;
}
