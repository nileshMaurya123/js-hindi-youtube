function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbers(3, 4);

const result = addTwoNumbers(3, 5);

console.log("Result:", result);

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  console.log("Hitesh");
  return result;
}

function greet(name) {
  if (name === undefined) {
    console.log("Please enter a username");
  }
  return `Hello, ${name} just logged in`;
}
console.log(greet("Alice"));

// functioin with objects

function Book(type, author) {
  this.type = type;
  this.author = author;
  this.getDetails = function () {
    return this.type + " written by " + this.author;
  };
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails());
