// 2. Given an array of mixed values (numbers and strings), separate them into two arrays
// and log both.
let numbers = [1, 1, 2, 3, 4, 5, "string", "string1"];
let numberArray = [];
let stringArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    numberArray.push(numbers[i]);
  } else {
    stringArray.push(numbers[i]);
  }
}
console.log(numberArray);
console.log(stringArray);
