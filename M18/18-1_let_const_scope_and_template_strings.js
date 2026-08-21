/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.

  var status = "Order Placed";
for (var i = 1; i <= 3; i++) {
  var status = "Processing Item " + i;
  console.log(status);
}
console.log("Final Status: ", status);
*/

// //*Solution:
// let status = "Order Placed";
// for (var i = 1; i <= 3; i++) {
//   let status = "Processing Item " + i;
//   console.log(status);
// }
// console.log("Final status: ", status);
/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/

//*Solution
const receiptGenerator = (name, price, qty) => {
  return `${name} x${qty} = ${price * qty} Taka`;
};
console.log(receiptGenerator("pen", 20, 3));
