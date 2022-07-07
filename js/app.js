const formUserInput = document.formUserInput;
const userInput = formUserInput.userInput;
const formMessage = document.querySelector('.form-message');

let history = [1, 1, 1, 1];
let predictObj = {};
/*let predictArray = [
    [[[[-1], [-1]], [[-1], [-1]]], [[[-1], [-1]], [[-1], [-1]]]],
    [[[[-1], [-1]], [[-1], [-1]]], [[[-1], [-1]], [[-1], [-1]]]]
];*/
let predictArray = [];

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


        if (!Array.isArray(predictArray[history[0]])) {
            predictArray[history[0]] = [];
        }
        if (!Array.isArray(predictArray[history[0]][history[1]])) {
            predictArray[history[0]][history[1]] = [];
        }
        if (!Array.isArray(predictArray[history[0]][history[1]][history[2]])) {
            predictArray[history[0]][history[1]][history[2]] = [];
        }
        if (!Array.isArray(predictArray[history[0]][history[1]][history[2]][history[3]])) {
            predictArray[history[0]][history[1]][history[2]][history[3]] = [];
        }
        predictArray[history[0]][history[1]][history[2]][history[3]] = userInputVal;
        console.log(predictArray);


        history.shift();
        history.push(userInputVal);
    }

    getNextFortuneVal();
}

function getNextFortuneVal() {
    let predictVal = predictObj[history.join(',')] || Math.round(Math.random());

    console.log('USER WILL TYPE=' + predictVal);
}