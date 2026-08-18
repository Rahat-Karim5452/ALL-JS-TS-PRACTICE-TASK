// 3. Print all even numbers between 1 and 50, using continue to skip odd numbers
// inside the loop.
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
