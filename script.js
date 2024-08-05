function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}

let firstNum = "";
let secondNum = "";
let operator = "";
let previousOperatorButton = null;

const buttons = document.querySelectorAll("button");
const resultBox = document.querySelector("#resultBox");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const value = this.id;

        if (!isNaN(value)) {
            if (operator === "") {
                firstNum += value;
                resultBox.textContent = firstNum;
            } else {
                secondNum += value;
                resultBox.textContent = secondNum;
            }
        } else if (value === "clear") {
            firstNum = "";
            secondNum = "";
            operator = "";
            resultBox.textContent = "0";
            if (previousOperatorButton) {
                previousOperatorButton.classList.remove("highlight");
            }
        } else if (value === "=") {
            if (firstNum !== "" && secondNum !== "" && operator !== "") {
                const result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
                resultBox.textContent = result;
                firstNum = result.toString();
                secondNum = "";
                operator = "";
                if (previousOperatorButton) {
                    previousOperatorButton.classList.remove("highlight");
                }
            }
        } else {
            operator = value;
            if (previousOperatorButton) {
                previousOperatorButton.classList.remove("highlight");
            }
            this.classList.add("highlight");
            previousOperatorButton = this;
        }
    });
});