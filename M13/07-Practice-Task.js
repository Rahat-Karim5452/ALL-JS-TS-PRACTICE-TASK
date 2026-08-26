/* Task 13-5A: Check for a Palindrome
Problem Statement:
Write a function isPalindrome that takes a string and returns true if it reads
the same forwards and backwards, otherwise false. Assume lowercase, no
spaces. */
// Input: a string
// Output: true or false
// Returns: a boolean
function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  if (str === reverse) {
    return true;
  }
  return false;
}
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
