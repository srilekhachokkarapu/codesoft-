let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}
