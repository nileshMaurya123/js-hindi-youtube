// The ternary operator in JavaScript is a shorthand for if...else statements.
// It's a compact way to evaluate a condition and return one of two values.

// Syntax

// condition ? expressionIfTrue : expressionIfFalse;

let age = 18;
let status = age >= 18 ? "Adult" : "Minor"; // greater than

console.log(status); // Output: "Adult"

// Another example with functionallity

let number = 5;
console.log(number % 2 === 0 ? "Even" : "Odd"); // Output: "Odd"

//Nesting Ternary Operators (use with caution for readability):
// >= greater than and equal to sign

let score = 85;

let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

console.log(grade); // Output: "B"
