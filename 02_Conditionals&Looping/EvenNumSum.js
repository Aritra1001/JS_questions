/**
 * You are tasked with creating a program that calculates the sum of even numbers up to a given limit
 * Expected Input
6
Expected Output
12
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the limit: ", (limit) => {
    let sum = 0;
    for(let i = 2; i <= limit; i += 2){
        sum += i;
    }
    console.log("Sum of even numbers =", sum);
})