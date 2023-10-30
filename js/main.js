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
let result;

function calculatorStart(){

    // Output and memory concatenating numbers on click
    numberInputs.map(input => {
        input.addEventListener('click', addToMemoryAndShowInOutput)

        output.innerText = ""

        function addToMemoryAndShowInOutput() {
            output.innerText += input.innerText;
            memory += input.innerText;
        }
    })

    // Memory concatenating operators on click
    operatorInputs.map(input => {
        input.addEventListener('click', evaluate)

        function evaluate() {
            input === divideButton ? divideButton.innerText = "/" :
            input === multiplyButton ? multiplyButton.innerText = "*" :
            input === subtractButton ? subtractButton.innerText = "-" :
            input.innerText;

            input !== equalsButton ? 
            memory += input.innerText :
            result = eval?.(`"use strict";(${memory})`);
        }
    })

    // Show result in output when equals is clicked
    equalsButton.addEventListener('click', showResults);

    function showResults() {
        output.innerText = result;
    }

    // Output reset when operator is clicked and another number is clicked
    operatorInputs.map(input => {
        input.addEventListener('click', triggerOutputReset);

        function triggerOutputReset() {
            numberInputs.map(input => {
                input.addEventListener('click', outputReset);
            
                function outputReset() {
                    output.innerText = input.innerText;
                }
            })
            
        }
    })

}

// Memory reset when another button is clicked after reset

equalsButton.addEventListener('click', triggerMemoryReset)

function triggerMemoryReset() {
    numberInputs.map(input => {
        input.addEventListener('click', memoryReset);
    
        function memoryReset() {
            memory = input.innerText;
        }
    })
}

calculatorStart();