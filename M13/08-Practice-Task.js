/* Task 13-5B: Find the Shortest Word in a Sentence
Matches lesson: 13-5 (String problems — split + loops)
Problem Statement:
Write a function findShortestWord that takes a sentence and returns the
shortest word in it.

Input:"JavaScript is a fun language"
Output: "a"

*/
// Input: a sentence (string)
// Output: the shortest word
// Returns: a string
function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for (let i = 0; i < words.length; i++) {
    if (shortest.length > words[i].length) {
      shortest = words[i];
    }
  }
  //   console.log(words);
  return shortest;
}
console.log(findShortestWord("JavaScript is a fun language")); //Expected: "a";
