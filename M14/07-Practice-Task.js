/* Problem Statement:
This function should return the difference between two numbers (a - b). It currently swaps the
parameters somewhere and gives a wrong result.

i/p: 10, 3 => o/p: 7

/ Bug: find why the result comes out negative
function subtract(a, b) {
return b - a; / find the bug
}
console.log(subtract(10, 3)); / Expected: 7 (currently returns -7)
*/
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 3));
