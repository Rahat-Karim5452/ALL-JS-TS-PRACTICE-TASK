/* Using age and hasID, use nested if-else to check whether someone is eligible to vote. */
let hasID = true;
let age = 20;
if (age >= 18) {
  if (hasID) {
    console.log("eligible for vote!");
  } else {
    console.log("Not eligilbe");
  }
} else {
  console.log("Not eligilbe");
}
