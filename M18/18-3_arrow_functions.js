/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/
/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/

//*Solution 1:
const calculateShipping = (amount, fee = 60) => {
  if (amount >= 1000) {
    return "Free Shipping";
  }
  return `Shipping Fee: ${fee} Taka`;
};
// console.log(calculateShipping(1200));
// console.log(calculateShipping(500));
// console.log(calculateShipping(500, 100));

//*Solution 2:
const getGrade = (marks) => {
  //   if (typeof marks != "number") {
  //     return "Invalid";
  //   }
  //   if (marks >= 90) {
  //     return "A+";
  //   } else if (marks >= 80 && marks <= 89) {
  //     return "A";
  //   } else if (marks >= 60 && marks <= 79) {
  //     return "B";
  //   }
  //   return "Fail";
  //*ternary Operator:
  return typeof marks != "number"
    ? "Invalid"
    : marks >= 90
      ? "A+"
      : marks >= 80
        ? "A"
        : marks >= 60
          ? "B+"
          : "Fail";
};
console.log(getGrade("dfjf"));
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(45));
