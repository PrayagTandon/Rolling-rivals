'use strict';

// SELECTING THE ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('score--1');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');

// SELECTING THE BTN and IMG
const diceEl = document.querySelector('.dice-img');
const btnNewEl = document.querySelector('.btn--reset');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

// let score , currentScore , playing , activePlayer;

// STARTING CONDITION
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRollEl.addEventListener('click', function () {
    // 1. GENERATE A RANDOM DICE ROLL


    // 2. DISPLAY THE DICE ROLL

    // 3. CHECK FOR 1 : IF YES - SWITCH PLAYER
})

