// TODO: 5. Write a function that takes a number as a parameter and returns its factorial.
function fact(nums) {
  let result = 1;
  for (let i = 1; i <= nums; i++) {
    result *= i;
  }
  return result;
}
console.log(fact(4));
