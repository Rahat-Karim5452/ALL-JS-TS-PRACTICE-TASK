// 6. Given an array of numbers, write a program that finds and prints the second largest
// number without using sort().
let numbers = [19, 12, 31, 32, 95, 23, 56, 87, 324];
let max = numbers[0];
let secondMax = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (max < numbers[i]) {
    secondMax = max;
    max = numbers[i];
  } else if (numbers[i] > secondMax && numbers !== max) {
    secondMax = numbers[i];
  }
}
console.log(max, secondMax);
