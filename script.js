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

// console.log(divide(numb1, numb2));