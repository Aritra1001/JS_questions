/**
 * Count and return the number of words present in the string.



Expected Input
"I am a Ninja Coder "
Expected Output
5
 */

const countWords = (str) => {
  const wordsArr = str.trim().split(" ");
  return wordsArr.length;
};

console.log(countWords("I am a Ninja Coder "));
