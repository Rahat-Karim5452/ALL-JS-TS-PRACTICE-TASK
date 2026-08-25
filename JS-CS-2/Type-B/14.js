// 6. Write a function that takes a string as a parameter and returns the number of vowels found in it.
function checkVowel(str) {
  let vowel = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(checkVowel("Hello World"));
