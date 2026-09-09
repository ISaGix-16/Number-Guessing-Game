let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 0

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please Enter a valid number')
    } else if(guess < 1) {
        alert('Please Enter a number more than 1')
    } else if(guess > 100) {
        alert('Please Enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuesses === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Number is TOOOOO Low`)
    } else if(guess > randomNumber) {
        displayMessage(`Number is TOOOOO High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuesses++;
    remaining.innerHTML = `${10 - numGuesses}`
}   

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(event){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuesses = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
