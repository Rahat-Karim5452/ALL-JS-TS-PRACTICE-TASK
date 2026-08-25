/* Build a simple discount system: if cart total is above 1000 AND the user is a member, apply
a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use
logical operators combined with if-else if.  */
let cartTotal = 1001;
let discount = 20;
let isMember = true;
let discount2 = 10;

if (cartTotal > 1000 && isMember) {
  console.log("Discounted Price = ", cartTotal - (cartTotal * discount) / 100);
} else if (cartTotal > 1000) {
  console.log("Discounted Price = ", cartTotal - (cartTotal * discount2) / 100);
} else {
  console.log("No Discount");
}
