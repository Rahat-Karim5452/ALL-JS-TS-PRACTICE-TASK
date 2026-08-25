// 8. Write a function that takes two numbers as parameters and returns the larger of the two without using Math.max().
function checkLargest(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}
console.log(checkLargest(20, 21));
