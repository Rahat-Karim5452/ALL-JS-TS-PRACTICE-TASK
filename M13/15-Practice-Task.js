/* Task 13-9: Long Words Above a Length, Then Their Count
Problem Statement:
Write two functions:
● getWordsLongerThan — takes an array of words and a length
threshold, and returns a new array containing every word whose
length is greater than the threshold.
● countArray — takes an array and returns how many elements it
contains.
Then use the returned array from getWordsLongerThan as the input to
countArray.

input:["cat", "elephant", "dog",
"hippopotamus", "ox"], threshold 3

output:Words longer than 3 → ["elephant",
"hippopotamus"]
Count → 2
*/
function getWordsLongerThan(words, minLength) {
  //   console.log(words);
  let word = [];
  for (let i = 0; i < words.length; i++) {
    // console.log(words[i].length);
    if (words[i].length > minLength) {
      //   console.log(words[i]);
      word.push(words[i]);
    }
  }
  return word;
}
function countArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}
let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);
console.log(longWords); // Expected: ["elephant", "hippopotamus"]
console.log(total); // Expected: 2
