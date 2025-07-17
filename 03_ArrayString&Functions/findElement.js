/**
 * You have been given an array and a number. Your task is to find the number in the array and return the index of that number. 
 * If the element is not present in the array return -1.



Expected Input
arr=[23,43,67,89,62,29]
ele= 67
Expected Output
2
 */

function findTheNumber(arr, ele) {
  let answer = -1;
  if (arr.includes(ele)) {
    answer = arr.indexOf(ele);
  }
  return answer;
}
console.log(findTheNumber([23,43,67,89,62,29], 67));
