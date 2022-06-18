const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const rounds = document.querySelector('#rounds');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

btn1.addEventListener('click', function(){
    if (!gameOver) {
        p1Score ++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

btn2.addEventListener('click', function(){
    if (!gameOver) {
        p2Score ++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

rounds.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

btn3.addEventListener('click', reset);

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser')
    btn1.disabled = false;
    btn2.disabled = false;
}