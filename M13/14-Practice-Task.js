/* Task 13-8B: Get a Value or a Default
Problem Statement:
Write a function getValueOrDefault that takes an object, a key name, and a
default value, and returns the object's value for that key if it exists, otherwise
the default value.

input: person, key "age", default 0  => output: 25
input: person, key "grade", default "N/A" 0  => output: "N/A"

*/
// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value
function getValueOrDefault(obj, key, defaultValue) {
  //   console.log(obj);
  let keys = Object.keys(obj);
  //   console.log(keys);
  let values = Object.values(obj);
  //   console.log(values);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === key) {
      return values[i];
    }
  }
  return defaultValue;
}
let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0)); // Expected: 25
console.log(getValueOrDefault(person, "name", "N/A")); // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A")); // Expected:
("N/A");
