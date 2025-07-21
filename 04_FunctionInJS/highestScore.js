/**
 * Write a JavaScript function to find the highest score in an array of student scores. 
 * This task involves using the reduce method to iterate through the array and determine the maximum score.



Complete the findHighestScore function that takes an array of scores as input.
Use the reduce method to find the highest score in the array.
Ensure your logic handles edge cases, such as arrays with only one element or duplicate highest scores.
Return the highest score as the output.


Expected Input:
[85, 90, 78, 88, 76, 95, 89]
Expected Output:
95
 */

const scores = [85, 90, 78, 88, 76, 95, 89];

const highestScore = scores.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(highestScore);
