console.log("Hello Ashish!");

let a = 5;
let b = 6;
let c = a + b;
console.log(c);

if (c > 10) {
  console.log("Output is Greater than 10.");
} else {
  console.log("Output is Less than 10.");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  ++i;
  console.log(i);
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

const prompt = require('prompt-sync')();
let dayNumber = parseInt(prompt("Enter day number: "));
let day;

switch (dayNumber) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
}
console.log(day);
