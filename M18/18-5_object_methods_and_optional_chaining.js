/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/
//=========================================================================================
const getMostExpensiveProduct = (product) => {
  let keys = Object.keys(product);
  let highest = 0;
  let mostExpensiveProduct = "";
  //   console.log(keys);
  for (let key of keys) {
    if (highest < product[key]) {
      highest = product[key];
      mostExpensiveProduct = key;
    }
  }
  //   console.log(mostExpensiveProduct);
};

getMostExpensiveProduct({ pen: 20, book: 150, bag: 500 });

//===================================================================================
/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/
//=====================================================================================
let user1 = {
  name: "John Doe",
  address: {
    city: "Anytown",
  },
};
let user2 = {
  name: "John Doe",
  //   address: null,
};

const getCity = (user) => {
  return user.address?.city ?? "City not found";
};
console.log(getCity(user1));
console.log(getCity(user2));
