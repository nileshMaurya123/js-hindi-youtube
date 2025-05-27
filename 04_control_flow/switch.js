/* Syntax of Switch Case

switch (expression) {
 case x:
code block
 break;
 case y:
 code block
  break;
 default:
 code block
} */

// Run this exact code
const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("default case matched");
    break;
}
