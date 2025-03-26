let display = document.getElementById('display');
display.innerHTML = '';

document.getElementById('clear').addEventListener('click', () => {
    display.innerHTML = '';
});

let numericButtons = document.querySelectorAll('.numeric-button')
numericButtons.forEach(button => {
    button.addEventListener('click', function () {
        let value = display.innerHTML;
        let number = button.value;
        display.innerHTML = value + number;
    })
})

let operationButtons = document.querySelectorAll('.operation-button');
operationButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (button.value === '=') {
            try {
                var result = eval(display.innerHTML);
                display.innerHTML = result;
            } catch (error) {
                display.innerHTML = "Mathematical Error";
                setTimeout(() => {
                    display.innerHTML = '';
                }, 1000);
            }
        }
        else {
            let value = display.innerHTML;
            let operator = button.value;
            display.innerHTML = value + operator;
        }
    })
})