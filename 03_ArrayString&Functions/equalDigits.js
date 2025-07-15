/**
 * Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. 
 * The function should determine whether the numbers have an equal number of digits or not. 
 * If they have an equal number of digits then store true in the answer else store false.
 * 
 * Expected Input
num1 = 78574
num2 = 78392
Expected Output
true
 */

function commonDigits(num1, num2) {
  const num1Len = String(num1).length;
  const num2Len = String(num2).length;
  if (num1Len == num2Len) {
    return true;
  } else {
    return false;
  }
}

const result = commonDigits(1345, 5421);
console.log(result);
