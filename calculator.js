const calculator = (num1, num2, operation) => {
  if (operation instanceof Function) {
    return operation(num1, num2);
  }
  return;
};

// addition
const add = (num1, num2) => num1 + num2;

// substraction
const subtract = (num1, num2) => num1 - num2;

//division
const division = (num1, num2) => {
  if (num2 === 0) {
    return `Error enter denominator greater than 0`;
  }
  return num1 / num2;
};

const remainder = (num1, num2) => num1 % num2;

let resultAdd = calculator(7, 1, add);
console.log(resultAdd);

let resultSub = calculator(6, 5, subtract);
console.log(resultSub);

let resultDiv = calculator(1, 0, division);
console.log(resultDiv);

let resultRemainder = calculator(3, 2, remainder);
console.log(resultRemainder);
