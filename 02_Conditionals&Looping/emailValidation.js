/**
 * If the email is valid, store the value of the email in the result variable with a welcome message. If the email is invalid, 
 * store the string "invalid email" in the result variable.
Test Cases


Dot should be at least 4 characters after "@": Ensure that the dot " . " in the domain name appears at least 4 characters after the "@" symbol. This means there should be at least three characters between "@" and the dot (e.g., @abc.).
Check for a valid email: Verify that the function correctly identifies and processes a valid email by including the email in the output message.
Check for an invalid email: Verify that the function correctly identifies and outputs "invalid email" for an invalid email.
Check for the size of the email: Ensure that the email has at least 3 characters before the "@" symbol.
Check for the "@" symbol: Ensure that the email contains the "@" symbol and that it is positioned correctly.
Check for the length after the dot: Verify that there are at least 2 characters after the last dot " . " in the email domain

 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the email: ", (email) => {
  let result;
  const emailLen = email.length;
  const lastIndex = emailLen - 1;
  const lastDotIndex = email.lastIndexOf(".");
  const atIndex = email.indexOf("@");

  if (
    atIndex < 3 ||
    lastDotIndex - atIndex < 4 ||
    lastIndex - lastDotIndex < 2
  ) {
    result = "invalid email";
  } else {
    result = "Welcome " + email + " to our site";
  }
  console.log(result);
});
