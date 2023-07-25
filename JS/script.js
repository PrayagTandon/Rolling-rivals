'use strict';

// SELECTING THE ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// SELECTING THE BTN and IMG
const diceEl = document.querySelector('.dice-img');
const btnNewEl = document.querySelector('.btn--reset');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

let score, currentScore, playing, activePlayer;

// STARTING CONDITION
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
currentScore = 0;
activePlayer = 0;

btnRollEl.addEventListener('click', function () {

    // 1. GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1
    console.log(dice);

    // 2. DISPLAY THE DICE ROLL
    diceEl.classList.remove('hidden');
    diceEl.src = `Img/dice-${dice}.png`;

    // 3. CHECK FOR 1 : IF YES - SWITCH PLAYER
    if (dice !== 1) {
        // ADD DICE TO CURRENT SCORE
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore;
    } else {
        // SWITCH PLAYER
        activePlayer = activePlayer === 0 ? 1 : 0;

    }
})

