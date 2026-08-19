// 4. Write a program that finds and prints the sum and average of all numbers in a given
// array.
let numbers = [19, 12, 31, 32, 95, 23, 56, 87, 324];
let sum = 0;
let avg = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
avg = sum / numbers.length;
console.log(sum, avg);
