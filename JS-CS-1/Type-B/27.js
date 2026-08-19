// 5. Write a program that removes duplicate values from a given array of numbers.
let arr = [22, 45, 45, 84, 2, 4, 4, 2, 1, 5];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr);
