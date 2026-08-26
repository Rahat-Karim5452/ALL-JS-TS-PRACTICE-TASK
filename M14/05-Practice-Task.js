/* Problem Statement:
This function should return the count of numbers from 1 to n. Right now it never stops (infinite loop)
— find out why.
i/p: 5 => o/p: 5



/ Bug: this loop never ends — find the missing piece
function countUpTo(n) {
let count = 0;
for (let i = 1; i <= n;) { / something is missing here
count = count + 1;
}
return count;
}
console.log(countUpTo(5)); / Expected: 5 (currently freezes/never finishes)
*/
function countUpTo(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count = count + 1;
  }
  return count;
}
console.log(countUpTo(5));
