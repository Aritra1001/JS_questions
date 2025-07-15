/**
 * You're building a basic expense tracker program. The idea is to add new expenses, provided as a number, 
 * to the existing array of expenses. After doing this, the program should give you the updated array.
 * 
 * Expected Input
[340 , 567 , 434 , 653]
newExpense = 543
Expected Output
 [340 , 567 , 434 , 653 , 543]
 */

function addExpense(newExpense, ogExpenseArr) {
  ogExpenseArr.push(newExpense);
  return ogExpenseArr;
}

const newExpenseArr = addExpense(543, [340, 567, 434, 653]);
console.log(newExpenseArr);
