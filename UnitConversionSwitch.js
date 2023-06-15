const prompt = require('prompt-sync')();
const length = parseFloat(prompt("Enter the length value: "));

const option = parseInt(prompt("Choose the conversion option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));

let result;
switch (option) {
  case 1:
    result = length * 12; // Convert Feet to Inch
    console.log(`${length} Feet = ${result} Inches`);
    break;
  case 2:
    result = length * 0.3048; // Convert Feet to Meter
    console.log(`${length} Feet = ${result} Meters`);
    break;
  case 3:
    result = length / 12; // Convert Inch to Feet
    console.log(`${length} Inches = ${result} Feet`);
    break;
  case 4:
    result = length * 3.28084; // Convert Meter to Feet
    console.log(`${length} Meters = ${result} Feet`);
    break;
  default:
    console.log("Invalid option!");
    break;
}
