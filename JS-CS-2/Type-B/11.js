//TODO: 3. Write a function with a default parameter for discount percentage (10%)
//TODO: that returns the discounted price of an item.
function checkDiscount(price, discount = 10) {
  return price - (price * discount) / 100;
}
console.log(checkDiscount(1000));
