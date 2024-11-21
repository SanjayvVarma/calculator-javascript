let display = document.getElementById('display')
let value = '';

const handleClick = (input) => {
    value += input;
    display.value = value;
}

const handleSubmit = () => {
    try {
        value = eval(value).toString();
        display.value = value;
    } catch (error) {
        display.value = 0;
    }
}

const clearDisplay = () => {
    value = '';
    display.value = '';
}

const deleteLastCharacter = () => {
    value = value.slice(0, -1);
    display.value = value;
}
