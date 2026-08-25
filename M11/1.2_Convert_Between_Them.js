/* Task 1.2 — Convert Between Them
● Convert the string "JavaScript" into an array of characters.
● Convert the array ["c", "a", "t"] back into a single string "cat".
*/
let str = "JavaScript";
let arrOfCharacters = [];
for (let i = 0; i < str.length; i++) {
  arrOfCharacters.push(str[i]);
}
console.log(arrOfCharacters);
let arr = ["c", "a", "t"];
let singleString = arr.join("");
console.log(singleString);
