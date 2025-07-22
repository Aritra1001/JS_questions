/**
 * You are tasked with implementing two functions that operate on a list of names:



findNames: This function searches for a specific name in the list and returns the name if it is found, or a message 
"Name not found" if it is not present.
updateNamesIndex: This function finds the index of a specific name in the list and returns the index if found,
 or -1 if the name does not exist.
These functions should utilize the array methods find and findIndex respectively, and must not use loops.



Expected Input:
findNames(names, "John"); 
updateNamesIndex(names, "Emma"); 
Expected Output:
John
3
 */

const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

const findNames = (names, peopleName) => {
  const name = names.find((_name) => _name == peopleName);
  if (!name) {
    return "Name not found";
  } else {
    return name;
  }
};

const findNamesIndex = (names, peopleName) => {
  const index = names.findIndex((_name) => _name == peopleName);
  return index;
};

console.log(findNames(names, "John")); // Output: "John"
console.log(findNames(names, "Andrew")); // Output: "Name not found"

console.log(findNamesIndex(names, "Emma")); // Output: 3
console.log(findNamesIndex(names, "Mark")); // Output: -1
