function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

function getPalindrome(number) {
  const str = number.toString();
  const reversedStr = str.split('').reverse().join('');
  return parseInt(reversedStr);
}
const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter a number:"));

if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
  
  const palindrome = getPalindrome(number);
  
  if (isPrime(palindrome)) {
    console.log(`Palindrome of ${number} is ${palindrome} and it is also a prime number.`);
  } else {
    console.log(`Palindrome of ${number} is ${palindrome}, but it is not a prime number.`);
  }
} else {
  console.log(`${number} is not a prime number.`);
}
