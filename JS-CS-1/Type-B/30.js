// 8. Given two separate arrays of numbers, use concat() to merge them into one array,
// then use join() to print all values as a single comma-separated string.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let newArray = arr1.concat(arr2);
console.log(newArray);
console.log(newArray.join(","));
