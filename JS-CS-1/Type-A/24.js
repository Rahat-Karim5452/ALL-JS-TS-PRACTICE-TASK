// 5. Write a program that counts how many even numbers exist in a given array using a
// loop.
let numbers = [19, 12, 31, 32, 95, 23, 56, 87, 324];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
    count++;
  }
}
console.log("Even Numbers= ", count);
