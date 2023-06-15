const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter a number (1, 10, 100, 1000.): "));

let unit;
if (number === 1) {
  unit = "One";
} else if (number === 10) {
  unit = "Ten";
} else if (number === 100) {
  unit = "Hundred";
} else if (number === 1000) {
  unit = "Thousand";
} else {
  unit = "Invalid number!";
}

console.log("Unit:", unit);