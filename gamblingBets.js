let currentAmount = 100;
const goalAmount = 200;
let numWins = 0;
let numBets = 0;

while (currentAmount > 0 && currentAmount < goalAmount) {
  currentAmount -= 1;
  numBets++;

  const result = Math.floor(Math.random() * 2);

  if (result === 0) {
    currentAmount += 2;
    numWins++;
  }
}

console.log("Final Results:");
console.log("Number of wins: ", numWins);
console.log("Number of bets made: ", numBets);
console.log("Final amount: ", currentAmount);