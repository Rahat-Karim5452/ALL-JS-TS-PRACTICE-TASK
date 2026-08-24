// 5. Write a function that takes an array of numbers as a parameter and returns the sum of all the elements.
function sumOfArray(nums) {
  let sum = 0;
  for (let num of nums) {
    // console.log(num);
    sum += num;
  }
  return sum;
}
console.log("Sum of Array Elem: ", sumOfArray([2, 2, 3, 4, 5]));
