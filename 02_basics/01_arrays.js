// Array declarations
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraaj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]); // Output: 1

// Array methods
myArr.push(6); // Adds 6 to the end
myArr.push(7); // Adds 7 to the end
myArr.pop(); // Removes last item (7)

myArr.unshift(10); // Adds 10 to the start
myArr.shift(); // Removes the first item (10)

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3)); // 3

// Use a new variable name to avoid redeclaration error
const myArrStr = ["0", "1", "2", "3", "4", "5"];
const newArr = myArrStr.join(); // Joins with commas

console.log(myArr);
console.log(newArr); // Output: "0,1,2,3,4,5"
