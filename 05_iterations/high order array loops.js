// Array.prototype.map

// Example - 1
const givenArray = [477, 8914, 40461, 599148];
const newArray = givenArray.map((n) => n * 2);
console.log(newArray); // [954, 17828, 80922, 1198296]

// Example - 2
const givenArray1 = ["pen", "book", "code"];
const newArray1 = givenArray1.map((w) => w + "s");
console.log(newArray1); // ['pens', 'books', 'codes']

// Array.prototype.filter

// Example - 1
const givenArray2 = [390, 190, 311.85, 67, 19048, 5000, 670];
const newArray2 = givenArray2.filter((c) => c <= 350);
console.log(newArray2); // [190, 311.85, 67]

// Example - 2
const givenArray3 = [
  { name: "Shanghai", population: 24300000 },
  { name: "Los Angeles", population: 3792621 },
  { name: "New Delhi", population: 21800000 },
  { name: "Mumbai", population: 18400000 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2100263 },
];

const newArray3 = givenArray3.filter(({ population }) => population >= 5000000);
console.log(newArray3); // Cities with population >= 5 million

// Array.prototype.reduce

// .reduce() = reduce the elements of an array to a single value

// Example - 1
const grades = [75, 50, 90, 80, 65, 95];

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum); // 95
console.log(minimum); // 50

// Example - 2
const prices = [5, 30, 10, 25, 15, 20];

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`); // $105.00

// Array - a variable-like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.push("strawberry"); // adds to the end
// fruits.pop("orange"); // ❌ wrong usage - pop doesn't take arguments
fruits.pop(); // removes "strawberry"

fruits.unshift("mango"); // adds to beginning
fruits.shift(); // removes "mango"

// iterate an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// log individual elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("banana");

console.log(numOfFruits); // total number of fruits
console.log(index); // index of "banana"
