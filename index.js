let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".Lastresult");
const LoworHigh = document.querySelector(".LoworHigh");
const guessSubmit = document.querySelector('.guessSubmit');
const guessFeild = document.querySelector('.guessFeild');
let guessCount = 1;
let resetbutton;

function checkGuess() {
    const userGuess = Number(guessFeild.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guess: ";

    }
    guesses.textContent += userGuess + "";
    if (userGuess === randomNumber) {
        lastResult.textContent = " Congralutation ! you got it correct";
        lastResult.style.backgroundColor = 'green';
        LoworHigh = "";
        setGameover();
    } else if (guessCount === 10) {
        lastResult.textContent = "!! Game Over !!";
        LoworHigh = "";
        setGameover()
    } else {
        lastResult.textContent = "Wrong";
        if (userGuess < randomNumber) {
            LoworHigh.textContent = "Guess is too low";
        } else if (userGuess > randomNumber) {
            LoworHigh.textContent = "Guess is too high"
        }

    }
    guessCount++;
    guessFeild.value = "";
    guessFeild.focus()






}
guessSubmit.addEventListener("click", checkGuess());

function setGameover() {
    guessFeild.disabled = true;
    guessSubmit.disabled = true;
    resetbutton = document.createElement("button");
    resetbutton.textContent = "Start New Game";
    document.body.append(resetbutton);
    resetbutton.addEventListener('click', resetGame())


}

function resetGame() {
    guessCount === 1;
    const resetParas = document.querySelector(".resultpara p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }
    resetbutton.parentNode.removeChild(resetbutton);
    guessFeild.disabled = false;
    guessSubmit.disabled = false;
    guessFeild.textContent = "";
    guessFeild.focus();
    lastResult.style.backgroundcolor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;



}