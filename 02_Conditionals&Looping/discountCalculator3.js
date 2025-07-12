/**
 * You run an e-commerce website where you offer different discounts based on the amount purchased by the customer.

Create a program that calculates the discount 
offer depending on the given amount and stores the calculated discount in the discount variable.
* Requirements:

Use a switch statement to evaluate the purchase amount.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the purchase amount: ", (amount) => {
    let discount = "";
    switch(true){
        case (amount < 500): discount = "No discoount.";
        break;
        case (amount >= 500 && amount < 1000): discount = "10 % discount";
        break;
        case (amount >= 1000 && amount < 2000): discount = "20% discount";
        break;
        case(amount >= 2000 && amount < 4000): discount = "30% discount";
        break;
        case(amount >= 4000 && discount < 5000): discount = "40% discount";
        break;
        default: discount = "Invalid discount";
    }
    console.log("discount = ", discount);
})