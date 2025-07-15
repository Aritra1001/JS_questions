/**
 * Create a JavaScript function called lastDigit that takes two numbers, num1 and num2, as arguments. 
 * The function should determine whether the last digit of both numbers is equal. 
 * If the last digits are equal, the function should return true; otherwise, it should return false.
 * 
 * Expected Input
num1 = 29
num2 = 19
Expected Output
true
 */

function lastDigit(num1, num2) {
  const num1LastDig = num1 % 10;
  const num2LastDig = num2 % 10;
  if (num1LastDig == num2LastDig) {
    return true;
  } else {
    return false;
  }
}

const result = lastDigit(121, 221);
console.log(result);
