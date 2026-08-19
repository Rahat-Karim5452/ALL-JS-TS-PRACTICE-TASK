// 3. Using multi-level if-else if-else, categorize a person's age into Child (0–12), Teen
// (13–19), Adult (20–59), or Senior (60+).
// let age = 0;
// let age = 12;
// let age = 9;
// let age = 13;
// let age = 15;
// let age = 19;
// let age = 20;
// let age = 22;
// let age = 59;
// let age = 60;
let age = 62;
if (age <= 12) {
  console.log("Child");
} else if (age <= 19) {
  console.log("Teen");
} else if (age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}
