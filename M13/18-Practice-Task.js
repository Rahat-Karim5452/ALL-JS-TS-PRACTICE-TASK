/* 13-10C: Remove Duplicate Values from an Array
Problem Statement: Write a function removeDuplicates that takes an array
of numbers and returns a new array where each value appears only once,
keeping the first occurrence.

input:[1, 2, 2, 3, 4, 4, 5]
o/p: [1, 2, 3, 4, 5]
*/
// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array
function removeDuplicates(numbers) {
  let unique = [];
  // TODO: write your logic here
  for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]
