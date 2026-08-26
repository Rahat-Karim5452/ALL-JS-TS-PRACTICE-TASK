/* Task 13-8A: List an Object's Keys
Problem Statement:
Write a function listKeys that takes an object and returns an array containing
its property names (keys). 
input: { name: "Sam", age: 25, city: "Dhaka" }
output: ["name", "age", "city"]
*/
function listKeys(obj) {
  //   const keys = Object.keys(obj);
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
