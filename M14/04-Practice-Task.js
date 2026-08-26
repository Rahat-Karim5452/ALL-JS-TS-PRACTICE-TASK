/* Problem Statement:
This function should return "Pass" if a score is 50 or above, otherwise "Fail". It gives the wrong result
for a score of exactly 50.

i/p: 50 => o/p: Pass
i/p: 40 => o/p: Fail



/ Bug: find why score = 50 doesn't return "Pass"
function checkScore(score) {
if (score > 50) {
return "Pass";
} else {
return "Fail";
}
}
console.log(checkScore(50)); / Expected: "Pass" (currently wrong)
console.log(checkScore(40)); / Expected: "Fail"
*/

function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"
