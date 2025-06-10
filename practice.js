// Example 1: String Assignment
let city = "Tampa";
let cityName = city;
city = "Venice";
console.log(cityName); // Outputs: "Tampa"

// Explanation:
// - cityName holds the value of city at the time of assignment.
// - Changing city later doesn't affect cityName, as strings are primitive and assigned by value.

// Example 2: Object Assignment
let person1 = { name: "Alex", age: 30 };
let person2 = person1;
person2.name = "Kyle";
console.log(person1); // Outputs: { name: 'Kyle', age: 30 }

// Explanation:
// - person2 is a reference to person1.
// - Modifying person2 also modifies person1, as objects are assigned by reference.

// Example 3: Function Scope and Hoisting
let x = 10;
function y() {
  x = 100;
  return;
  function x() {}
}
y();
console.log(x); // Outputs: 100

// Explanation:
// - The function x() is hoisted but doesn't affect the variable x.
// - x is assigned 100 within the function y(), affecting the global x.

// Example 4: Array Copying
const list1 = [1, 2, 3, 4, 5];
const list2 = [...list1]; // Creates a shallow copy of list1
list1.push(6, 7, 8);
console.log("List1:", list1); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]
console.log("List2:", list2); // Outputs: [1, 2, 3, 4, 5]

// Explanation:
// - list2 is a shallow copy of list1.
// - Changes to list1 after the copy do not affect list2.

// Example 5: Passing Primitives and Objects to Functions
const myString = "hello world";
let myString2 = myString; // Use 'let' here to allow reassignment
myString2 = "new value"; // This is now valid
console.log(myString); // Outputs: 'hello world'
console.log(myString2); // Outputs: 'new value'

// Explanation:
// - myString2 is a copy of myString.
// - Changing myString2 doesn't affect myString, as strings are primitive and assigned by value.
