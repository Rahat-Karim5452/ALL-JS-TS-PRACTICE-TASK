/* Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5
condition branches. */
let marks = 40;
if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("F");
}
