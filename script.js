function add(n1, n2) {
    let result = n1 + n2;
    return result;
}

function substract(n1, n2) {
    let result = n1 - n2;
    return result;
}

function multiply(n1, n2) {
    let result = n1 * n2;
    return result;
}

function divide(n1, n2) {
    let result = n1 / n2;
    return result;
}

let firstInputNumber;
let operator;
let secondInputNumber; 

function operate(operator, n1, n2) {
    if(operator == "+") {
        return add(n1, n2);
    } else if(operator == "-") {
        return substract(n1, n2);
    } else if (operator == "*") {
        return multiply(n1, n2);
    } else if (operator == "/") {
        return divide(n1, n2);
    }
}

// Permet d'utiliser le bouton Clear pour remettre le resultat à son état initial
function clearResult() {
    let resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = "0";
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearResult);

function changeDisplay() {
    let inputDisplay = document.querySelector("operations");
    let buttonsValue = document.querySelector(".userInputs").textContent;
    inputDisplay.textContent = 
}

let userInput = document.querySelector(".userInputs");
userInput.addEventListener("click", changeDisplay);