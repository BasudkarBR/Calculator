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
        console.log( display.value);

        console.log(value == "backspace");
        if(value == "backspace"){
            display.value = display.value.slice(0, -1);
            console.log( display.value);
        }
        else{
            display.value += value;
        }
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }
});
