// To RUN TypeScript File:
// 1/ npm i -g tsx
//    tsx filepath

// Notes Form Problem Solving:
// Math.sqrt() => square root Ber korar Jnno
// Number.isInteger() => পূর্ণসংখ্যা কিনা চেক করে।

function isPerfectSquare(num) {
  if (Number.isInteger(Math.sqrt(num))) {
    return true;
  }
  return false;
}
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false

// Math.floor(5.9);  // 5
// Math.ceil(5.1);   // 6
// Math.round(5.5);  // 6
// Math.sqrt(16);    // 4
// Math.pow(2, 3);   // 8
// Number.isNaN(); Value NaN কিনা চেক করে।
