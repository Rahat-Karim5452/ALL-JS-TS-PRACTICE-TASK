/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

//*Solution:
const calculateTotal = (discount, ...prices) => {
  //   console.log(prices);
  if (!discount) {
    discount = 5;
  }
  //*Total Find using Reduce function:
  //   const totalPrice = prices.reduce((sum, num) => sum + num, 0);
  //   console.log(totalPrice);

  //* total Find Using For Loop:
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
    // console.log(total);
  }
  const discountedAmount = (total * discount) / 100;
  const totalAfterDiscount = total - discountedAmount;
  return totalAfterDiscount;
};
console.log("After Discount Amount = ", calculateTotal(10, 100, 200, 50, 300));
console.log(
  "After Discount Amount = ",
  calculateTotal(null, 100, 200, 50, 300),
);

/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let mergeArr3 = [...arr1, ...arr2];
// console.log(mergeArr3);

//*Traditionl way
let newArr = [];
for (let i = 0; i < mergeArr3.length; i++) {
  if (!newArr.includes(mergeArr3[i])) {
    newArr.push(mergeArr3[i]);
  }
}
console.log(newArr);

//*using Set
let newArr1 = [...new Set(mergeArr3)];
console.log(newArr1);
