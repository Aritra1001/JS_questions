/**
 * You are building a program to calculate the factorial of a given positive integer.
 * Expected Input
6
Expected Output
720 
 *
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number: ", (num) => {
    let fact = 1;
    for(let i = 2; i <= num; i++){
            fact *= i;
    }
    console.log(`Factorial of ${num}`, fact);
})