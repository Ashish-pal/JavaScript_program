const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter a number between 1-7 for weekday: "));

let weekday;
switch (number) {
  case 1:
    weekday = "Sunday";
    break;
  case 2:
    weekday = "Monday";
    break;
  case 3:
    weekday = "Tuesday";
    break;
  case 4:
    weekday = "Wednesday";
    break;
  case 5:
    weekday = "Thursday";
    break;
  case 6:
    weekday = "Friday";
    break;
  case 7:
    weekday = "Saturday";
    break;
  default:
    weekday = "Invalid number!";
    break;
}

console.log("Weekday:", weekday);
