let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (number === '.' && display.value.includes('.')) return;
    display.value += number;
}

function setOperation(operator) {
    if (display.value === '') return;
    firstOperand = parseFloat(display.value);
    currentOperation = operator;
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    firstOperand = null;
}

function calculate() {
    if (currentOperation === null || display.value === '') return;
    let secondOperand = parseFloat(display.value);
    let result;

    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }

    display.value = result;
    currentOperation = null;
    firstOperand = null;
}

// Keyboard input support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperation(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});

// Set focus to the display for key input
document.getElementById('display').focus();
