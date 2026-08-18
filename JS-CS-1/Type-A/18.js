// 5. Write a program to find the sum of digits of a number using both a for loop and a
// while loop, and note the difference in structure.

//*Using For Loop:
//*Math.floor() is used here to remove the decimal part and keep only the integer (whole number) part.
let num = 1234;
let sum = 0;
for (; num > 0; num = Math.floor(num / 10)) {
  sum += num % 10;
}
console.log(sum);

//*Using While Loop:
let num1 = 1234;
let sum1 = 0;
while (num1 > 0) {
  sum1 += num1 % 10;
  num1 = Math.floor(num1 / 10);
}
console.log(sum1);
