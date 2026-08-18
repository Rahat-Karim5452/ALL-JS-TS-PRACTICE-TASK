// 4. Find the largest of three given numbers using a multi-level if-else if-else structure.
let num1 = 39;
let num2 = 11;
let num3 = 12;
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is Largest");
} else if (num2 > num3 && num2 > num1) {
  console.log(num2 + " is Largest");
} else {
  console.log(num3 + " is Largest");
}
