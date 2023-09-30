let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
            currentInput = result.toString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}
