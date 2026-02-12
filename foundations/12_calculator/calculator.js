const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length === 0) {
    return 0
  }
	let sum = 0;
  for (const num of arr) sum += num;
  return sum
};

const multiply = function(arr) {
  if(arr.length === 0) {
    return 1;
  }
  let mult = 1;
  for (const num of arr) mult *= num;
  return mult;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
