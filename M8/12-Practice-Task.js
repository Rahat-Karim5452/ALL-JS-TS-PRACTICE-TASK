/* Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese
(use if-else if). */
let bmi = 12;

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
