// 2. Write a program that finds and prints the largest number in a given array using a
// loop.
let arr = [4, 5, 6, 7, 3, 2, 100];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
