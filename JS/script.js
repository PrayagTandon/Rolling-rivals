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

let scores, currentScore, playing, activePlayer;

// STARTING CONDITIONS

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = false;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    btnHoldEl.classList.add('btn--disabled');
    btnRollEl.classList.add('btn--disabled');
}

init();

document.querySelector('.player--0-heading').textContent = prompt('Enter player1 name:(Max 10 characters)');
document.querySelector('.player--1-heading').textContent = prompt('Enter player2 name:(Max 10 characters)');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// BTN ROLL DICE....
btnRollEl.addEventListener('click', function () {

    if (playing) {
        // 1. GENERATE A RANDOM DICE ROLL
        const dice = Math.trunc(Math.random() * 6) + 1

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
            switchPlayer();
        }
    }
})

// BTN HOLD SCORE...
btnHoldEl.addEventListener('click', function () {

    if (playing) {
        // 1. ADD CURRENT SCORE TO TOTAL SCORE
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. IF SCORE >= 100
        if (scores[activePlayer] >= 100) {
            // FINISH THE GAME
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            btnHoldEl.classList.add('btn--disabled');
            btnRollEl.classList.add('btn--disabled');
        }
        else {
            // SWITCH PLAYER
            switchPlayer();
        }
    }
})

// BTN RESET GAME...
btnNewEl.addEventListener('click', function () {
    init();
    playing = true;
    btnHoldEl.classList.remove('btn--disabled');
    btnRollEl.classList.remove('btn--disabled');
});