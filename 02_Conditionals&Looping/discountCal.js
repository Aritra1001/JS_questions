/**
 * The discount rules are as follows:

a- If the total purchase amount is $100 or more, apply a 10% discount 
b- If the total purchase amount is between $50 (inclusive) and $99.99 (inclusive), apply a 5% discount.
c- If the total purchase amount is less than $50, no discount is applied.
 * 
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the total amount: ", (totalAmount) => {
  let answer;

  if (totalAmount >= 100) {
    answer = totalAmount - totalAmount * 0.1;
  } else if (totalAmount >= 50 && totalAmount <= 99.99) {
    answer = totalAmount - totalAmount * 0.05;
  } else {
    answer = totalAmount;
  }
  console.log(answer);
});
