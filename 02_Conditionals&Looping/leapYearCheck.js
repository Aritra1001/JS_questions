/**
 * Check the following conditions to check if a given year is a leap year or not:

Condition 1: If a year is divisible by 4, it is a leap year.

Condition 2: If a year is divisible by 100, it is not a leap year.

Condition 3: If a year is divisible by 400, it is a leap year even though it is divisible by 100.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the year to be checked: ", (year) => {
    if(year % 4 == 0){
        console.log("Leap Year");
        if(year % 100 == 0){
            console.log("Not a leap year");
        }
        if(year % 400 == 0){
            console.log("Leap Year")
        }
    }
    else{
        console.log("Not a leap year");
    }
})

