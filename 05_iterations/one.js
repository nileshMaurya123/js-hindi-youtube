//   1. for Loop – Basic Syntax

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//  2. break – Stop the Loop Early

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exit the loop when i is 5
  }
  console.log(i);
}

// 3. continue – Skip Current Iteration

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skip the number 2
  }
  console.log(i);
}

// Example: Looping Through an Array

const fruits = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "cherry") {
    continue; // skip cherry
  }
  if (fruits[i] === "date") {
    break; // stop if date is found
  }
  console.log(fruits[i]);
}
