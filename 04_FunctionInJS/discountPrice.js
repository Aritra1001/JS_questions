/**
 * Write a curried function called applyDiscount to calculate the discounted price of a product. 
 * The outer function should take the discount percentage as a parameter, and 
 * it should return an inner function that accepts the price of the product. T
 * he inner function should calculate and return the discounted price rounded to two decimal places.



Use currying to create reusable discount functions, such as a 10% discount or a 50% discount, that can be applied to multiple products.



Expected Input
const tenPercentOff = applyDiscount(10);
tenPercentOff(100);
tenPercentOff(200);
const fiftyPercentOff = applyDiscount(50);
fiftyPercentOff(100);
fiftyPercentOff(300);
Expected Output:
90.00
180.00
50.00
150.00
 */

function applyDiscount(discountPercentage) {
  return function (price) {
    return (price - (price * discountPercentage) / 100).toFixed(2);
  };
}

const tenPercentOff = applyDiscount(10);
console.log(tenPercentOff(100));
console.log(tenPercentOff(200));

const fiftyPercentOff = applyDiscount(50);
console.log(fiftyPercentOff(100));
console.log(fiftyPercentOff(300));
