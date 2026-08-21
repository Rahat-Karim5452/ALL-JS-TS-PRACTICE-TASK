//Destructuring Notes
//*1 - Object Destructuring
const user = {
  id: 339,
  name: "Sakib",
  age: 35,
  //   education: {
  //     degree: "Master",
  //   },
};
//Object theke name ta ber Kore ene arekta variable e assign korte chai jeno onno jaygay use Korte pari
// let name = user["name"];
// console.log(name);
//destructuring:
const { name: title } = user;
// console.log(title);
//Nested Object:
// const { education: degree } = user;
// console.log(degree);
//Jodi Nested Missing Hoy: eror Khabe.(solution:default Value Dite hbe )
const { education: { degree } = {} } = user;
// console.log(degree); //undefined dibe error dibe na.

//*2- Array Destructuring
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a] = numbers;
console.log(a);
//Jodi 5,6 Chai
const [, , , , c, b] = numbers;
console.log(c, b);
//Nested array:
let num = [1, 2, 3, 4, [5, 6, 7], 8, 9];
const [, , , , [, d]] = num;
console.log(d);
