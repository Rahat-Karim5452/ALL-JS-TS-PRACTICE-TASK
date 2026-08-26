/* Task 13-7A: Average of All Numbers
Problem Statement:
Write a function averageOfArray that takes an array of numbers and returns
their average.

Input: [2, 4, 6]

Output: 4
*/
// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
function averageOfArray(numbers) {
  let total = 0;
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  avg = total / numbers.length;
  return avg;
}
console.log(averageOfArray([2, 4, 6]));
