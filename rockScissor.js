const Buttons = document.querySelectorAll('.btn');
const Player = document.getElementById('You');
const Computer = document.getElementById('Computer');
const Result = document.getElementById('Result');

let playerInput;
let computerInput;

Buttons.forEach( (Button) => {
    Button.addEventListener('click', () => {
        let randomNumber = parseInt(Math.random() * 10 + 1);
        console.log(randomNumber);
        if (randomNumber <= 3) {
            computerInput = 'ROCK';
            
        }else if (randomNumber > 4 && randomNumber <= 6) {
            computerInput = 'SCISSOR';
            
        }else if(randomNumber >= 7 && randomNumber <= 10){
            computerInput = 'PAPER';
            
        }

        playerInput = Button.id;

        if (playerInput === computerInput) {
            Result.innerHTML = 'FOUL, PLEASE TRY AGAIN';
            Player.innerHTML = `${playerInput}`
            Computer.innerHTML = `${computerInput}`
        }else if (playerInput === 'ROCK' && (computerInput === 'SCISSOR' || computerInput === 'PAPER')) {
            Result.innerHTML = 'YOU WIN';
            Player.innerHTML = `${playerInput}`
            Computer.innerHTML = `${computerInput}`
        }else if (playerInput === 'SCISSOR' && computerInput === 'PAPER') {
            Result.innerHTML = 'YOU WIN';
            Player.innerHTML = `${playerInput}`
            Computer.innerHTML = `${computerInput}`
        }else if (playerInput === 'SCISSOR' && computerInput === 'ROCK') {
            Result.innerHTML = 'YOU LOSS, BETTER LUCK NEXT TIME';
            Player.innerHTML = `${playerInput}`
            Computer.innerHTML = `${computerInput}`
        }else if (playerInput === 'PAPER' && computerInput === 'SCISSOR') {
            Result.innerHTML = 'YOU LOSS, BETTER LUCK NEXT TIME';
            Player.innerHTML = `${playerInput}`
            Computer.innerHTML = `${computerInput}`
        }else if (playerInput === 'PAPER' && (computerInput === 'SCISSOR' || computerInput === 'ROCK')) {
            Result.innerHTML = 'YOU LOSS, BETTER LUCK NEXT TIME';
            Player.innerHTML = `${playerInput}`
            Computer.innerHTML = `${computerInput}`
        }
    })
})