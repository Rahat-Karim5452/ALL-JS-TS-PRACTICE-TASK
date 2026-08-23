/*
  Problem 2: Fix the Mutation Bug — Discount Preview
  previewDiscount(cart) — should return a NEW array showing what each
  cart item's price WOULD be after a 10% discount, WITHOUT changing
  the original cart. The buggy version below accidentally mutates the
  original objects because objects/arrays are passed by REFERENCE — writing to item.price inside map() edits the
  very same object the original cart array points to.

  Input:
    cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]

  Output (new array; original cart price fields unchanged):
    [
      { name: "Pen", price: 90 },
      { name: "Bag", price: 450 },
    ]
*/

// Buggy version (for live demo) — log cart before/after and watch the
// ORIGINAL prices change even though we only meant to "preview".
// const previewDiscount = (cart) => {

//   return cart.map((item) => {
//     item.price = item.price - item.price * 0.1;
//     return item;
//   });
// };

//*Solution:
const previewDiscount = (cart) => {
  const updateCart = cart.map((item) => {
    // console.log(item, "item");
    return {
      //   name: item.name,
      //   color: item.color, //Jehutu egula change Korar Proyojon Nai
      ...item,
      price: item.price - item.price * 0.1,
    };
  });
  return updateCart;
};
let cart = [
  { name: "Pen", color: "red", price: 100 },
  { name: "Bag", color: "black", price: 500 },
];

console.log("Before:", cart);
console.log("Preview:", previewDiscount(cart));
console.log("After:", cart);
