const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function (val, power) {
  return Math.pow(val, power);
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= n; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
