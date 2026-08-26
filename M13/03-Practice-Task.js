/* Task 13-3A: Product of Digits
Problem Statement:
Write a function productOfDigits that takes a positive whole number and
returns the product of its individual digits.
Input: 123  Output: 6 (1 × 2 × 3)
Input: 4040 Output: 0
*/
// Input: a number
// Output: product of its digits
// Returns: a number
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for (let i = 0; i < str.length; i++) {
    total *= str[i];
  }
  return total;
}
console.log(productOfDigits(123)); //Expected: 6
console.log(productOfDigits(4040)); // Expected: 0
