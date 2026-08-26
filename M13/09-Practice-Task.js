/* Task 13-6A: Find the Second Smallest Number
Problem Statement:
Write a function findSecondSmallest that takes an array of numbers and
returns the second smallest distinct value. 
Input: [10, 5, 8, 20, 15]
Ouput: 8
*/
function findSecondSmallest(numb) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < numb.length; i++) {
    if (firstSmallest > numb[i]) {
      if (numb[i] !== firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = numb[i];
      }
    } else if (secondSmallest > numb[i] && numb[i] !== firstSmallest) {
      secondSmallest = numb[i];
    }
  }

  return { secondSmallest, firstSmallest };
}

console.log(findSecondSmallest([10, 5, 5, 8, 15]));
