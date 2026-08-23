/*
  Problem 1: Custom Sort — Descending Numbers
  sortDescending(nums) — sort an array of numbers from largest to
  smallest, using a comparator callback passed to .sort(). Return a
  NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/
const sortDescending = (nums) => {
  console.log("Before Func Call=> ", nums);
  const numbs2 = [...nums];
  const sortedNumbers = numbs2.sort((a, b) => {
    // return a - b; //asending Order
    return b - a; //descending order
  });
  //   console.log("Sorted Array ", sortedNumbers);
  return sortedNumbers;
};
const numbers = [1, 10, 2, 25, 3];
console.log(sortDescending(numbers));
console.log("After Func Call =>", numbers);
