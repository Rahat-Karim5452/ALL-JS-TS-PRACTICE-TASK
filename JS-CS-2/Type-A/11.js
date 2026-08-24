// 3. Write a function with a default parameter for tax rate (5%) that calculates and returns the total price of an item including
// tax.
function calculateTotalPrice(price, taxRate = 5) {
  let tax = (price * taxRate) / 100;
  return price + tax;
}
console.log(calculateTotalPrice(100));
