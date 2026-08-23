/*
 1.In sort Method the Original Array is changed.

 */
const sortDescending = (nums) => {
  console.log("Before Func Call: ", nums);
  const sortedNumbers = nums.sort((a, b) => {
    // return a - b; //asending Order
    return b - a; //descending order
  });
  console.log("Sorted Array ", sortedNumbers);
};
const numbers = [1, 10, 2, 25, 3];
console.log(sortDescending(numbers));
console.log("After Func Call =>", numbers);
