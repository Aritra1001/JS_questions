/**
 * Check whether a number is prime number or not
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number: ", (num) => {
    let isPrime = true;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("Prime Number");
    }
    else{
        console.log("Not a Prime Number");
    }
})