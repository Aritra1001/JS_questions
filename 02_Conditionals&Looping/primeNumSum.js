/**
 * You need to write a JavaScript function that calculates the sum of all prime numbers between 1 and a given upper limit 𝑛
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the limit: ", (limit) => {
  let sumOfPrime = 0;
  for (let i = 1; i <= limit; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      sumOfPrime += i;
    }
  }
  console.log(`Sum of prime numbers till ${limit} =`, sumOfPrime);
});
