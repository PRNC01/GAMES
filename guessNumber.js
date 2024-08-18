let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById('inputNumber');
const submitButton = document.getElementById('Submit');
const restartButton = document.getElementById('Restart');
const previousGuess = document.getElementById('previousGuesses');
const guessRemaining = document.getElementById('guessRemaing');
const finalResult = document.getElementById('finalResult');



let Guesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', () => {
        console.log(randomNumber);
        
        let Guess = userInput.value;
        validateGuess(Guess);
    })
}

function validateGuess(guess) {
    if (guess === '') {
        alert('PLEASE ENTER A NUMBER BETWEEN 1 TO 100')
    }else if (guess < 1) {
        alert('PLEASE ENTER A NUMBER GRETER THAN 1');
    }else if (guess > 100) {
        alert('PLEASE ENTER A NUMBER SMALLER THAN 100')
    }else {
        Guesses.push(guess);
        if (numGuess == 11) {
            displayGuess(guess);
            displayMessage(`GAME OVER. NUMBER WAS ${randomNumber}`);
            endGame()
        }else if(numGuess <= 0){
            numGuess = 0;
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage(`YOU GUESSED IT RIGHT`);
        endGame();
    }else if (guess < randomNumber) {
        displayMessage(`THE NUMBER IS VERY LOW`);
    }else if (guess > randomNumber) {
        displayMessage(`THE NUMBER IS VERY HIGH`);
    }
}

function displayGuess(guess) {
    userInput.value = ''; 
    previousGuess.innerHTML = `${Guesses} `;
    numGuess++;
    guessRemaining.textContent = `${11 - numGuess}`
}

function displayMessage(messsage) {
    finalResult.textContent = ` ${messsage}, `
}

function endGame() {
    if (numGuess == 0) {
        userInput.value = '';
        userInput.setAttribute('disabled');
        playGame = false;
        // startGame()
    }
}

function startGame() {
    alert('stop');
}

restartButton.addEventListener('click', () => alert('hello'));