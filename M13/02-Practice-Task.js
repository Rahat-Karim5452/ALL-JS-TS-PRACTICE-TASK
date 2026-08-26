/* Task 13-2B: Reverse a Number
Problem Statement:
Write a function reverseNumber that takes a positive whole number and
returns it with its digits reversed. (Hint: convert the number to a string first.) */
// Input: a number
// Output: the number with digits reversed
// Returns: a number
function reverseNumber(num) {
  let str = num.toString();
  //   console.log(str);
  let reverse = str.split("").reverse().join("");
  let convertToNumber = parseInt(reverse);
  return convertToNumber;
}
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7)); // Expected: 7
