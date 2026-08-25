/* Task 8.1 — Loop Through Properties
let scores = { math: 90, science: 85, art: 95 };
● Use a for...in loop to log each key and value like: math: 90.
● Calculate the average of all values in the loop. */

let scores = { math: 90, science: 85, art: 95 };
let marks = 0;
let avg = 0;
for (let keys in scores) {
  console.log(keys, scores[keys]);
  marks += scores[keys];
}
console.log(Object.keys(scores).length);
avg = marks / Object.keys(scores).length;
console.log(marks);
console.log(avg);
