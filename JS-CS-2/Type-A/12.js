// 4. Write a function that takes a number as a parameter and returns whether it is 'Even' or 'Odd'.
function checkOddEven(numbers) {
  if (numbers % 2 === 0) return "Even";
  return "Odd";
}
console.log(checkOddEven(2));
console.log(checkOddEven(1));
console.log(checkOddEven(5));
