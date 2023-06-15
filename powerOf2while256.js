const n = parseInt(process.argv[2]);

let powerOf2 = 1;
let result = "";

while (powerOf2 <= Math.pow(2, n) && powerOf2 <= 256) {
  result += powerOf2 + " ";
  powerOf2 *= 2;
}

console.log("Powers of 2 table:");
console.log(result);
