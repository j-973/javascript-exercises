const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

//initial value of arr.reduce set to 0
const sum = function(arr) {
  return arr.reduce((runningTotal, currentVal) => { return runningTotal + currentVal; }, 0);
};

//initial value of arr.reduce set to 1 instead of 0 for the initial value since anything times 0 is 0
const multiply = function(arr) {
  return arr.reduce((runningTotal, currentVal) => { return runningTotal * currentVal; }, 1);
};

const power = function(num, power) {
  return Math.pow(num, power);
};

function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
      // Multiply the result every time i counts down from the starting number
      result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
