/*

// Declare variable for calculator output
const screen = {};
screen.output = document.getElementById('output');
screen.memory = "";
// console.log(screen);

// Declare variables for calculator inputs and add event listeners
// Numbers
const numbers = {};
numbers.num0Button = document.getElementById('num0');
numbers.num0 = this.num0Button.value;
numbers.num1Button = document.getElementById('num1');
numbers.num2Button = document.getElementById('num2');
numbers.num3Button = document.getElementById('num3');
numbers.num4Button = document.getElementById('num4');
numbers.num5Button = document.getElementById('num5');
numbers.num6Button = document.getElementById('num6');
numbers.num7Button = document.getElementById('num7');
numbers.num8Button = document.getElementById('num8');
numbers.num9Button = document.getElementById('num9');
console.log(numbers);
// Operators
const operators = {};
operators.divideButton = document.getElementById('divide');
operators.multiplyButton = document.getElementById('multiply');
operators.addButton = document.getElementById('add');
operators.decimalButton = document.getElementById('decimal');
operators.equalsButton = document.getElementById('equals');
operators.subtractButton = document.getElementById('subtract');
// console.log(operators);

*/

/*
When inputs are clicked (except equals):
    value should be concatenated in output but reset when an operator input is clicked
    value should be concatenated to memory
*/

/* 
When equals input is clicked:
    create result variable
    result should be evaluation of concatenated memory
    output should show result
    then memory should reset
*/



// Output
const output = document.getElementById('output');
output.innerText = "";

// Inputs
const num0Button = document.getElementById('num0');
const num1Button = document.getElementById('num1');
const num2Button = document.getElementById('num2');
const num3Button = document.getElementById('num3');
const num4Button = document.getElementById('num4');
const num5Button = document.getElementById('num5');
const num6Button = document.getElementById('num6');
const num7Button = document.getElementById('num7');
const num8Button = document.getElementById('num8');
const num9Button = document.getElementById('num9');

const numberInputs = [num0Button, num1Button, num2Button, num3Button, num4Button, num5Button, num6Button, num7Button, num8Button, num9Button];

const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const addButton = document.getElementById('add');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');
const subtractButton = document.getElementById('subtract');

const operatorInputs = [divideButton, multiplyButton, addButton, decimalButton, subtractButton, equalsButton];

// Memory
let memory = "";

// Output and memory concatenating numbers on click
numberInputs.map(input => {
    input.addEventListener('click', addToMemoryAndShowInOutput)

    function addToMemoryAndShowInOutput() {
        output.innerText += input.innerText;
        memory += input.innerText;
    }
})

// Memory concatenating operators on click
operatorInputs.map(input => {
    input.addEventListener('click', addToMemory)
    function addToMemory() {
        input !== equalsButton ?
        memory += input.innerText :
        memory = eval(memory)
        output.innerText = eval(memory);
    }

   
})



