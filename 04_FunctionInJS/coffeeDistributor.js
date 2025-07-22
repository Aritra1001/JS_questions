/**
 * Each order is represented as an object with the following properties:

"orderNumber" - a unique number identifying the order
"items" - an array of objects representing the items ordered, where each item has a "name" and a "price" property
"discountCode" - a string representing a discount code for the order (optional)

You need to write a function "totalOrderValue" that takes an array of order objects and a callback function as its input and returns 
the total value of all orders combined after applying any applicable discounts.
The callback function, named "applyDiscount" should take two parameters: a discount code and total order value for a particular object,
 and applies the discount based on the following condition.
If the discount code is "COFFEELOVER," apply a 10% discount.

If the discount code is “TEALOVER,” apply a 20% discount.
There may be cases where there is no discount code present in the order object.
 */

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];

const totalOrderValue = (orders, applyDiscount) => {
  let orderTotals = orders.map((_order) => {
    let totalPrice = _order.items.reduce(
      (_total, _currItem) => _total + _currItem.price,
      0
    );
    if (_order.discountCode) {
      totalPrice = applyDiscount(totalPrice, _order.discountCode);
    }
    return totalPrice;
  });
  console.log("order total", orderTotals);
  let finalBill = orderTotals.reduce(
    (_total, _currVal) => _total + _currVal,
    0
  );
  return finalBill.toFixed(2);
};

function applyDiscount(total, discountCode) {
  if (discountCode === "COFFEELOVER") {
    return total * 0.9;
  } else if (discountCode === "TEALOVER") {
    return total * 0.8;
  } else {
    return total;
  }
}

console.log(totalOrderValue(orders, applyDiscount));
