/**
 * Create a Compound Interest program that calculates the total amount accumulated after a certain period based on the following attributes:

a. principalAmount: The principal value deposited

b. annualInterestRate: Interest rate per year(expressed as a decimal).

c.  numberOfYears: Period for which interest has to be given. 

For principalAmount = 500, annualInterestRate = 0.08, and numberOfYears = 5:
Year 1: 500 × 0.08 = 40, new amount = 500 + 40 = 540
Year 2: 540 × 0.08 = 43.2, new amount = 540 + 43.2 = 583.2
Continue similarly until Year 5.
 */

let principalAmt = 500,
  annualRate = 0.08,
  period = 5;
let year = 1,
  answer = principalAmt;
while (year <= period) {
  answer += answer * annualRate;
  year++;
}
console.log("compound interest =", answer);
