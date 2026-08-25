/* Task 7.2 — Nested Objects
let user = {
username: "coder123",
address: {
city: "Austin",
zip: "78701"
}
}
● Log the city using dot notation chaining.
● Add a country property inside the address.
● Delete the zip property from the nested object. */
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701",
  },
};
let city = user.address.city;
console.log(city);
delete user.address.zip;
console.log(user);
user.address.country = "bangladesh";
console.log(user);
