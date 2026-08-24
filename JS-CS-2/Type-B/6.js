//TODO: 6. Given an object, use the delete operator to remove one of its properties and print the object before and after deletion.
let product = {
  name: "somethig",
  price: 102,
  qty: 2,
};
console.log("Before Delete: ", product);
delete product.price;
console.log(product);
