let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (number === '.' && display.value.includes('.')) return;
    display.value += number;
    console.log('Display updated:', display.value);
}

function setOperation(operator) {
    if (display.value === '') return;
    firstOperand = parseFloat(display.value);
    currentOperation = operator;
    display.value = '';
    console.log('Operation set:', operator);
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    firstOperand = null;
    console.log('Display cleared');
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
        default:
            return;
    }

    display.value = result;
    currentOperation = null;
    firstOperand = null;
    console.log('Calculation result:', result);
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
        console.log('Backspace pressed:', display.value);
    }
});

// Set focus to the display for key input
display.focus();
