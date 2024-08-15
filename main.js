document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.calculator-button');
    const display = document.querySelector('.calculator-display-input');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            handleInput(value);
        });
    });

    function handleInput(value) {
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculateResult();
                break;
            default:
                updateDisplay(value);
                break;
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function updateDisplay(value) {
        display.value += value;
    }

    function calculateResult() {
        display.value = "Answer";
    }
});
