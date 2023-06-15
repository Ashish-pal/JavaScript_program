let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    headsCount++;
  } else {
    tailsCount++;
  }
}

let winner;
if (headsCount === 11) {
  winner = "Heads";
} else {
  winner = "Tails";
}

console.log("Final Results:");
console.log("Heads:", headsCount);
console.log("Tails:", tailsCount);
console.log("Winner:", winner);
