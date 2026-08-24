//TODO:7. Write a program that loops through an object representing a person's details using a for...in loop and prints each key
//TODO: alongside its value.
let product = {
  name: "somethig",
  price: 102,
  qty: 2,
};
for (let key in product) {
  console.log(key, product[key]);
}
