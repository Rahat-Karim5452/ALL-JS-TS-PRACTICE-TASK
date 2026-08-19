// 10. Given an array of 6 numbers, use splice() to remove the first 2 elements without
// inserting anything, and print the removed elements as well as the remaining array.
let arr = [22, 45, 67, 84, 2, 4];
let rmv = arr.splice(0, 2);
console.log(rmv);
console.log(arr);
