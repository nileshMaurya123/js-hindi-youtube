// Array.prototype.map

// Example - 1

const givenArray = [477, 8914, 40461, 599148];
const newArray = givenArray.map((n) => n * 2);
console.log(newArray);

// Example -2

const givenArray1 = ["pen", "book", "code"];
const newArray1 = givenArray.map((w) => w + "s");
console.log(newArray);

// Array.prototype.filter

// Example-1

const givenArray2 = [390, 190, 311.85, 67, 19048, 5000, 670];
const newArray2 = givenArray.filter((c) => c <= 350);
console.log(newArray);

// Example-2

const givenArray3 = [
  { name: "Shanghai", population: 24300000 },
  { name: "Los Angeles", population: 3792621 },
  { name: "New Delhi", population: 21800000 },
  { name: "Mumbai", population: 18400000 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2100263 },
];
const newArray3 = givenArray.filter(({ population }) => population >= 5000000);
console.log(newArray);

// Array.prototype.reduce

// .reduce() = reduce the elements of an array to a single value

// Example -1

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

// Example-2

const prices = [5, 30, 10, 25, 15, 20];

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);
