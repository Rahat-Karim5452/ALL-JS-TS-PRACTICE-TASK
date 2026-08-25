// 3. Given an array of numbers, find the largest and smallest value without using
// Math.max or Math.min directly on the whole array (use a loop).
let numbers = [11, 10, 2, 3, 4, 5];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (largest < numbers[i]) {
    largest = numbers[i];
  }
  if (smallest > numbers[i]) {
    smallest = numbers[i];
  }
}
console.log(largest);
console.log(smallest);
