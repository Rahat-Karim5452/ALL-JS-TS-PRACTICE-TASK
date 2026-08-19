// 6. Write a program that finds the smallest number in a given array without using any
// built-in method.
let arr = [11, 2, 6, 355, 23, 10, 0];
let smallest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest);
