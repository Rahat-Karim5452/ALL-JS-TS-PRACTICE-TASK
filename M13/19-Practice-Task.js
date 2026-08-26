/* 13-10D: Invert an Object
Problem Statement: Write a function invertObject that takes an object with
unique values and returns a new object where each original value becomes a
key, and each original key becomes its value.

i/p : { a: 1, b: 2, c: 3 }
o/p : { 1: "a", 2: "b", 3: "c" }

*/
// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object
function invertObject(obj) {
  let inverted = {};
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for (let i = 0; i < keys.length; i++) {
    inverted[values[i]] = keys[i];
  }
  return inverted;
}
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }
