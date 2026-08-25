//TODO: 4. Write a function that takes an array of numbers as a parameter and returns a new array containing only the even
//TODO: numbers.
function checkEven(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(checkEven([10, 20, 31, 49, 50, 57, 20, 509]));
