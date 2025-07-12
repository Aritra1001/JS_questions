/**
 * Write a javascript program to check if a number is composite or not.
 * Expected Input
20
Expected Output
true
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number: ", (num) => {
    let count = 0;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count > 0){
        console.log("composite number");
    }
    else{
        console.log("prime number");
    }
});
