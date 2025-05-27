// if
const isUserloggedIn = true;

if (2 == "2") {
  console.log("executed");
}

// <, >, <=, >= , ==, !=, === , !==

if (2 != "3") {
  console.log("not executed");
}

let balance = 600;

if (balance < 500) {
  // < less than sign
  console.log("Unable to withdrawl");
} else {
  console.log(" you can withdrawl");
}

let number = 10;

if (number > 10) {
  // > greater than sign
  console.log("Greater than 10");
} else if (number === 10) {
  console.log("Equal to 10");
} else {
  console.log("Less than 10");
}
