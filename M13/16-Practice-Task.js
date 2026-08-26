/* 13-10A: Perfect Square Checker
Problem Statement: Write a function isPerfectSquare that takes a number
and returns true if it is a perfect square, otherwise false.

input: 16 => output: true
input: 20 => output: false
*/
// Input: a number
// Output: true or false
// Returns: a boolean
function isPerfectSquare(num) {
  if (Number.isInteger(Math.sqrt(num))) {
    return true;
  }
  return false;
}
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false
