const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};

// To call the function:
//user.welcomeMessage();
//user.username = "sam";
//user.welcomeMessage();

//console.log(this);

//function chai() {
//console.log(this);
//}
//chai();

//function chai() {
//console.log(this.username);
//}
//chai();

// Arrow Function in ES6

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

//const addTwo = (num1, num2) => {
//return num1 + num2;
//};

// implicit return

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4));
