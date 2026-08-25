/* Task 3.2 — Combine Strings
● Use .concat() to join "Hello" and "World" into "Hello World".
● Use + and template literals to do the same thing. Compare all three approaches.
*/
let str1 = "Hello";
let str2 = "World";
// Using concat()
let concating = str1.concat(" ", str2);
console.log(concating);
// Using template literal
let temp = `${str1} ${str2}`;
console.log(temp);
// Using +
let useplus = str1 + " " + str2;
console.log(useplus);
