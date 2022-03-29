let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const inputOperator = (opeartor) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = opeartor;
  currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate()
  updateScreen(currentNumber)
});

const calculate = () => {
  let result = ""
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break
    default:
      break
  }
  currentNumber = result
  calculationOperator= ''
};

const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber= ''
}

clearBtn.addEventListener('click' , () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber +=dot
}

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})