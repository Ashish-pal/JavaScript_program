function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

const results = {};
while (true) {
  const result = rollDie();
  results[result] = (results[result] || 0) + 1;
  const maximumValue = Math.max(...Object.values(results));
  const minimumValue = Math.min(...Object.values(results));
  if (maximumValue >= 10 || minimumValue >= 10) {
    break;
  }
}

const maximumNumber = Object.keys(results).find(
  (key) => results[key] === Math.max(...Object.values(results))
);

const minimumNumber = Object.keys(results).find(
  (key) => results[key] === Math.min(...Object.values(results))
);

console.log("Results= ", results);
console.log("Number maximum times= ", maximumNumber);
console.log("Number minimum times= ", minimumNumber);
