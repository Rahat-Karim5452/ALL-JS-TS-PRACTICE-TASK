// 6. Write a function that takes three numbers as parameters and returns the largest of the three.
function checkNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return "largest: " + num1;
  else if (num2 > num1 && num2 > num3) return "largest: " + num2;
  return "largest: " + num3;
}
console.log(checkNumber(1, 10, 2));
