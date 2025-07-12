/**
 * You are given a positive integer num. Your task is to 
 * calculate the sum of all its factors and store this sum in the variable answer. 
 * A factor is a number that divides num without leaving any remainder.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (num) => {
    let sum = 0, i = 0;
    while(i <= num){
        if(num % i == 0){
            sum += i;
        }
        i++;
    }
    console.log("Sum of the factors = ", sum);
});
