// Selectors
const nums = document.querySelectorAll(".number");
const output = document.querySelector(".output");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let firstValue = "";
let operatorValue = "";
let secondValue = "";

// Functions
const compute = () => {};

const getSecondValue = () => {
  nums.forEach((num) => {
    num.addEventListener("click", (e) => {
      let number = e.target.textContent;
      secondValue += number;
      output.textContent = secondValue;
    });
  });
};

// EventListeners
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (operatorValue.length > 0) return;
    let number = e.target.textContent;
    firstValue += number;
    output.textContent = firstValue;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operatorValue = e.target.textContent;
    output.textContent = `${firstValue} ${operatorValue}`;
    getSecondValue();
  });
});

equals.addEventListener("click", () => {
  let a = Number(firstValue);
  let b = Number(secondValue);
  switch (operatorValue) {
    case "+":
      output.textContent = a + b;
      break;
    case "-":
      output.textContent = a - b;
      break;
    case "x":
      output.textContent = a * b;
      break;
    case "/":
      output.textContent = a / b;
      break;
    case "%":
      output.textContent = a % b;
      break;
  }
});
