//TODO:Calculate the total price, discount amount, and final price for a purchase.
let price = 200;
let quantity = 3;
let discount = 10; //10percent.

let totalPrice = price * quantity;
let afterDiscount = (totalPrice * discount) / 100;
let finalPrice = totalPrice - afterDiscount;
console.log("Total Price:", totalPrice);
console.log("Discount Amount:", afterDiscount);
console.log("Final Price:", finalPrice);
