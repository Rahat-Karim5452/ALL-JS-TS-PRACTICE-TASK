/* This function should return the first element of an array. It currently returns the wrong item.

i/p: [10, 20, 30] => o/p: 10

/ Bug: find why this doesn't return the first element
function getFirstElement(arr) {
return arr[1]; / find the bug
}
console.log(getFirstElement([10, 20, 30])); / Expected: 10 (currently returns 20)
*/

function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)
