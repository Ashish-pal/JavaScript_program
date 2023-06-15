const prompt = require('prompt-sync')();
const a = parseFloat(prompt("Enter the first number:"));
const b = parseFloat(prompt("Enter the second number:"));
const c = parseFloat(prompt("Enter the third number:"));

const result1 = a + b * c;
const result2 = c + a / b;
const result3 = a % b + c;
const result4 = a * b + c;

const maximum = Math.max(result1, result2, result3, result4);
const minimum = Math.min(result1, result2, result3, result4);

console.log("Results are ");
console.log("a + b * c = ", result1);
console.log("c + a / b = ", result2);
console.log("a % b + c = ", result3);
console.log("a * b + c = ", result4);
console.log("Maximum value: ", maximum);
console.log("Minimum value: ", minimum);
