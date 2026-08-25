/* Task 4.1 — Three Reversal Methods
Write a function reverseString(str) three different ways:
● Using .split(""), .reverse(), and .join("")
● Using a for loop that builds the reversed string character by character
● Test all three with "JavaScript" → should return "tpircSavaJ".
Bonus: Which method do you think is fastest? Why? */
function reverseString(str) {
  //return str.split("").reverse().join("");
  //using for loop
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseString("JavaScript"));
