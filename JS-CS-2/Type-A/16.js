// 8. Write a function that takes an array of numbers as a parameter and returns the average of all the elements.
function sumOfArray(nums) {
  let sum = 0;
  let avg = 0;
  for (let num of nums) {
    // console.log(num);
    sum += num;
  }
  avg = sum / nums.length;
  return avg;
}
console.log(sumOfArray([2, 2, 3, 4, 5]));
