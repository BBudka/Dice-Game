"use strict";
// DOM элементүүдийг олж авах
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0E1 = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0E1 = document.getElementById("current--0");
const current1E1 = document.getElementById("current--1");

const diceDom = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--roll");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// js автоматаар 0-ийг string болгоно
score0E1.textContent = 0;
score1El.textContent = 0;
diceDom.classList.add("hidden");
let currentscore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing;

//  rolling dice
const switchPlayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentscore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// BTN roll
btnRoll.addEventListener("click", function () {
  if (playing) {
    diceDom.classList.remove("hidden");
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRandom);
    diceDom.src = `dice-${diceRandom}.png`;
    if (diceRandom !== 1) {
      currentscore += diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

// BTN hold
let active = 0;
playing = true;
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceDom.classList.add("hidden");
      document.getElementById(`score--${activePlayer}`).textContent =
        "Next time";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      active = activePlayer == 1 ? 0 : 1;
      document
        .querySelector(`.player--${active}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
    }
  }
});

// new game
btnNew.addEventListener("click", function () {
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  activePlayer = 0;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  scores[0] = 0;
  scores[1] = 0;
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
});
