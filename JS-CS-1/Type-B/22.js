// 7. Write a program that counts how many numbers between 1 and 100 are divisible by
// 7, using continue to skip the rest.
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 7 !== 0) {
    continue;
  }
  count++;
}
console.log("Total = ", count);
