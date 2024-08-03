// calculator.js

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to remove the last character from the display
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to append a number or operator to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

// Function to evaluate the expression in the display
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
