// 3 types of scope in javascript 1. Function  2. Global 3. Block
// let and const provide block scope in javascript
// Variables declared inside a { } block cannot be accessed from outside the block.

// 1. Global Scope

var globalVar = "I am global";

console.log(globalVar); // ✅ Accessible anywhere

// 2. Local(Function) Scope

function myFunction() {
  let localVar = "I am local to this function";
  console.log(localVar); // ✅ Accessible inside the function
}

myFunction();
console.log(localVar); // ❌ Error: localVar is not defined

// 3. Block Scope

{
  let blockVar = "I exist only in this block";
  console.log(blockVar); // ✅ Accessible here
}

console.log(blockVar); // ❌ Error: blockVar is not defined
