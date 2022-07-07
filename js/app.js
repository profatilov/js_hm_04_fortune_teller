const formUserInput = document.formUserInput;
const userInput = formUserInput.userInput;
const formMessage = document.querySelector('.form-message');

let history = [1, 1, 1, 1];
let predictObj = {};

getNextFortuneVal();

formUserInput.addEventListener('submit', fortune);

function fortune(e) {
    e.preventDefault();

    let userInputVal = parseInt(userInput.value);

    if (userInputVal !== 0 && userInputVal !== 1) {
        formMessage.textContent = 'Input must be 0 or 1!';
    } else {
        formMessage.textContent = '';

        predictObj[history.join(',')] = userInputVal;

        history.shift();
        history.push(userInputVal);
    }

    getNextFortuneVal();
}

function getNextFortuneVal() {
    let predictVal = predictObj[history.join(',')] || Math.round(Math.random());

    console.log('USER WILL TYPE=' + predictVal);
}