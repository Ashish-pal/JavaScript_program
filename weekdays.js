const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter a number between 1-7 for weekday: "));

let weekday;
if (number === 1) {
  weekday = "Sunday";
} else if (number === 2) {
  weekday = "Monday";
} else if (number === 3) {
  weekday = "Tuesday";
} else if (number === 4) {
  weekday = "Wednesday";
} else if (number === 5) {
  weekday = "Thursday";
} else if (number === 6) {
  weekday = "Friday";
} else if (number === 7) {
  weekday = "Saturday";
} else {
  weekday = "Invalid number!";
}

console.log("Weekday: ", weekday);
