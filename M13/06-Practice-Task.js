/* Task 13-4B: Remove First and Last Character
Problem Statement:
Write a function removeFirstAndLast that takes a string and returns it with
the first and last character removed. */
// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  let first = str.slice(1, -1);
  return first;
}
console.log(removeFirstAndLast("hello")); // Expected: "ell"
