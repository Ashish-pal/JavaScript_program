const prompt = require('prompt-sync')();
const magicNumber = parseInt(prompt("Enter number between 1 and 100. "));

let lowerBound = 1;
let upperBound = 100;

let guess;
let attempts = 0;

while (true) {
  attempts++;

  guess = Math.floor((lowerBound + upperBound) / 2);

  const response = prompt(`Is your number ${guess}? (Enter 'c' for correct, 'l' for less than, 'g' for greater than)`);

  if (response === 'c') {
    console.log(`Magic number ${magicNumber} found in ${attempts} attempts`);
    break;
  } else if (response === 'l') {
    lowerBound = guess + 1;
  } else if (response === 'g') {
    upperBound = guess - 1;
  } else {
    console.log("Invalid response. Please enter 'c', 'l', or 'g'.");
  }
}