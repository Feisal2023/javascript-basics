// Function Definition || Function Declaration
 
// function square(num) {
//   return num * num;
// }

// Function calling and giving a value or argument

// console.log(square(10));

// Function Expression

// const square = function(num) {
//   return num * num;
// }

// console.log(square(6));

// Arrow function

// const square = num => num * num;
// console.log(square(20));

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(10, 50));

// Find 2 ^ 10 = 1024

// const power = (base, exponent) => {
//   let result = 1;
//   for(i = 0; i < exponent; i++) {
//     result = result * base;
//   }
//   return result;
// }
// console.log(power(2, 10));
// console.log(power(2, 3));
// Default parameters
const subtraction = (a = 5, b= 4) => a - b; // The default parameters will be executed if the argument/ value is not provided
console.log(subtraction(20, 10));