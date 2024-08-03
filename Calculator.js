// script.js
let num1 = document.getElementById('num1');
let operator = document.getElementById('operator');
let num2 = document.getElementById('num2');
let calculateButton = document.getElementById('calculate');
let clearButton = document.getElementById('clear');
let resultDiv = document.getElementById('result');
let historyDiv = document.getElementById('history');

let history = [];

calculateButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clear);

function calculate() {
    let num1Value = parseFloat(num1.value);
    let num2Value = parseFloat(num2.value);
    let operatorValue = operator.value;

    if (isNaN(num1Value) || isNaN(num2Value)) {
        resultDiv.innerText = 'Invalid input';
        return;
    }

    let result;
    switch (operatorValue) {
        case '+':
            result = num1Value + num2Value;
            break;
        case '-':
            result = num1Value - num2Value;
            break;
        case '*':
            result = num1Value * num2Value;
            break;
        case '/':
            if (num2Value === 0) {
                resultDiv.innerText = 'Cannot divide by zero';
                return;
            }
            result = num1Value / num2Value;
            break;
        default:
            resultDiv.innerText = 'Invalid operator';
            return;
    }

    resultDiv.innerText = `Result: ${result}`;
    history.push(`${num1Value} ${operatorValue} ${num2Value} = ${result}`);
    historyDiv.innerText = history.join('\n');
}

function clear() {
    num1.value = '';
    num2.value = '';
    operator.value = '+';
    resultDiv.innerText = '';
    history = [];
    historyDiv.innerText = '';
}
