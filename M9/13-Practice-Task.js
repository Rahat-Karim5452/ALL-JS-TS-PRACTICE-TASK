/* Task 13 — Comparing Loop Types
Write the same task — printing numbers 1 to 5 — three times: once using for, once using
while, and once using do while. Compare how the code structure differs for each. */
// Using for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Using while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Using do while loop
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
