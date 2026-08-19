// 9. Write a program that checks whether a given variable is an array using
// Array.isArray(), and prints an appropriate message for both an array input and a
// non-array input (e.g., a string).
let arr = [1, 2, 3];
let val = "a";
let arr2 = [];
let str = "Hello";
// console.log(Array.isArray(arr));
// console.log(Array.isArray(val));
// console.log(Array.isArray(arr2));
// console.log(Array.isArray(str));
if (Array.isArray(arr)) {
  console.log("It is Array");
} else {
  console.log("Not Array");
}

if (Array.isArray(val)) {
  console.log("It is Array");
} else {
  console.log("Not Array");
}

if (Array.isArray(arr2)) {
  console.log("It is Array");
} else {
  console.log("Not Array");
}

if (Array.isArray(str)) {
  console.log("It is Array");
} else {
  console.log("Not Array");
}
