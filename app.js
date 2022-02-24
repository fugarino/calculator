// Selectors
const nums = document.querySelectorAll(".number");
const output = document.querySelector(".output");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const ac = document.querySelector(".ac");

let firstValue = "";
let operatorValue = "";
let secondValue = "";

// Functions
const compute = (num) => {
  if (operatorValue.length === 0) {
    firstValue += num;
    output.textContent = firstValue;
    console.log(firstValue);
  } else {
    secondValue += num;
    output.textContent = secondValue;
    console.log(secondValue);
  }
};

// EventListeners
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    compute(e.target.textContent);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operatorValue = e.target.textContent;
    output.textContent = `${firstValue} ${operatorValue}`;
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

ac.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operatorValue = "";
  output.textContent = "0";
});
