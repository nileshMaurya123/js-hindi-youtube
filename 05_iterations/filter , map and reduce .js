// .filter()= creates a new array by filtering out elements

// Example -1

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

// Example -2

let ages = [20, 25, 30, 35, 40, 45, 50, 55, 60];
let adults = numbers.filter(isEven);
let children = numbers.filter(isOdd);

console.log(children);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}
