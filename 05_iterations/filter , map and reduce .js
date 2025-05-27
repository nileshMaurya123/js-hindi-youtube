// .filter() = creates a new array by filtering out elements

// Example - 1: Filter even and odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log("Even Numbers:", evenNums); // [2, 4, 6]
console.log("Odd Numbers:", oddNums); // [1, 3, 5, 7]

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

// Example - 2: Filter adults and children by age
let ages = [20, 25, 30, 35, 40, 45, 50, 55, 60];

let adults = ages.filter(isAdult);
let children = ages.filter(isChild); // will return [] in this case

console.log("Adults (18+):", adults); // [20, 25, ..., 60]
console.log("Children (<18):", children); // []

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}
