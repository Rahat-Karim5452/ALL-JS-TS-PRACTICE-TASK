// 1. Given an array of numbers, remove duplicates and log the unique values only.
let numbers = [1, 1, 2, 3, 4, 5, 6, 6, 4, 3, 9];
let num = [];
for (let i = 0; i < numbers.length; i++) {
  if (!num.includes(numbers[i])) {
    num.push(numbers[i]);
  }
}
console.log(num);
