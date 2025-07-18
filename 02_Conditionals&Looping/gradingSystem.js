/**
 * The grades will be assigned in the result variable based on the following criteria:
1- If the value of the marks variable is greater than or equal to 90, the value of the result variable should be "A grade"
2- If the marks are between 80 and 89, the value of the result variable should be "B grade".
3- If the marks are between 70 and 79, the value of the result variable should be "C grade".
4- If the marks are between 60 and 69, the value of the result variable should be "D grade".
5- If the marks are less than 60, the value of the result variable should be "F grade".
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the marks: ", (marks) => {
  let result;
  if (marks >= 90) {
    result = "A grade";
  } else if (marks >= 80 && marks <= 89) {
    result = "B grade";
  } else if (marks >= 70 && marks <= 79) {
    result = "C grade";
  } else if (marks >= 60 && marks <= 69) {
    result = "D grade";
  } else {
    result = "F grade";
  }
  console.log(result);
});
