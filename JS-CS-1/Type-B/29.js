// 7. Given an array of numbers, use indexOf() and includes() to check for a specific
// value and print its position (or -1) along with a true/false result.
let arr = [11, 2, 6, 355, 23, 54];
let idx = arr.indexOf(43);
console.log("Index: ", idx);
let available = arr.includes(43);
console.log("Includes: ", available);
