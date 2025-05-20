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

//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "chaudhary",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
