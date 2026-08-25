// 7. Write a function that takes an array of numbers as a parameter and returns a new array containing only the numbers
// greater than 10.
function checkGrater(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(checkGrater([10, 20, 31, 49, 50, 57, 20, 509]));
