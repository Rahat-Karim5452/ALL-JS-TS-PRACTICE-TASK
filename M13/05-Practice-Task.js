/* Task 13-4A: Count Vowels
Problem Statement:
Write a function countVowels that takes a string and returns how many
vowels it contains. Assume the string only contains lowercase letters, no
spaces. */
// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript")); // Expected: 3
