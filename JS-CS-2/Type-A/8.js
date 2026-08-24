//TODO:8. Given a nested object representing a person with an embedded address object, access and print a property from inside -
//TODO: the nested object.
let object = {
  name: "Something",
  age: 20,
  address: {
    location: "Badda,320",
  },
};
console.log(object.address.location);
