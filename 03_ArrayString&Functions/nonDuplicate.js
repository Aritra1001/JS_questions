/**
 * You have been provided with two arrays your task is to merge both arrays while 
 * removing the duplicate elements from the merged array.
 * 
 * Expected Input
 arr1= [1,2,3,4,5,6,7]
 arr2 = [5,6,7,8,9]
Expected Output
[1,2,3,4,5,6,7,8,9]
 * 
The order of the elements should be preserved, i.e., 
The elements of the final array should be in the same order as they were present in the merging array.
 */

// Without using Set()
function mergeArray(arr1, arr2) {
  let mergedArr = [...arr1, ...arr2];
  let newArr = [];
  for (let element of mergedArr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(mergeArray([1, 2, 4, 5, 7], [3, 4, 6, 7, 9, 0]));

// with using Set()
function mergeArray1(arr1, arr2) {
  let mergedArr = [...arr1, ...arr2];
  let newArr = [...new Set(mergedArr)];
  return newArr;
}
console.log(mergeArray1([1, 2, 4, 5, 7], [3, 4, 6, 7, 9, 0]));
