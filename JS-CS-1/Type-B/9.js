// 1. Write a program to check whether a given year is a leap year (use logical operators
// to combine the divisibility conditions).
// condition:Year divisible by 400
// OR
// Year divisible by 4 AND NOT divisible by 100
let year = 1990;
// let year = 2000;
// let year = 2024;
if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
  console.log("Leap Year");
} else {
  console.log("Not Leap year");
}
