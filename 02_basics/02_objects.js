// singleton
//object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  "full name": "Hitesh Chaudhary",
  [mySym]: "myKey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greeting = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting);

// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
