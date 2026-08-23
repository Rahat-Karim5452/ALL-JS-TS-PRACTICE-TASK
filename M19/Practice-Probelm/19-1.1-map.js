/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.

  IQ: 200 tk 10%  => (200*10)/100
*/
const applyDiscount = (prices, discountRate) => {
  let pricesAfterDiscount = prices.map((elem, ind, arr) => {
    // console.log(elem, ind, arr);
    const discountedPrice = (elem * discountRate) / 100;
    const afterDiscounted = elem - discountedPrice;
    return afterDiscounted;
  });
  return pricesAfterDiscount;
};
let productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices, 10));
console.log("Original Array Not changed: ", productPrices);
