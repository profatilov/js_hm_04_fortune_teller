const formUserInput = document.formUserInput;
const userInput = formUserInput.userInput;
const formMessage = document.querySelector('.form-message');

let history = [1, 1, 1, 1];
let predictArray = [[[[[-1], [-1]], [[-1], [-1]]], [[[-1], [-1]], [[-1], [-1]]]], [[[[-1], [-1]], [[-1], [-1]]], [[[-1], [-1]], [[-1], [-1]]]]];

getNextFortuneVal();

formUserInput.addEventListener('submit', fortune);

function fortune(e) {
    e.preventDefault();

    let userInputVal = parseInt(userInput.value);

    if (userInputVal !== 0 && userInputVal !== 1) {
        formMessage.textContent = 'Input must be 0 or 1!';
    } else {
        formMessage.textContent = '';

        predictArray[history[0]][history[1]][history[2]][history[3]] = userInputVal;

        history.shift();
        history.push(userInputVal);
    }

    getNextFortuneVal();
}

function getNextFortuneVal() {
    let predictVal;

    if (predictArray[history[0]][history[1]][history[2]][history[3]] >= 0) {
        predictVal = predictArray[history[0]][history[1]][history[2]][history[3]];
    } else {
        predictVal = Math.round(Math.random());
    }

    console.log('USER WILL TYPE=' + predictVal);
}