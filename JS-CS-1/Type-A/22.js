//3.Write a program to reverse a given array without using the built-in reverse() method.
let numbers = [19, 12, 31, 32, 95, 23, 56, 87, 324];
let reverseArray = [];

// for (let i = 0; i < numbers.length; i++)
// Loop চালালে shift() এর কারণে numbers.length কমে যায়।
// তাই এইভাবে loop চালানো হয়েছে।
/* 
i = 0 → length 9
i = 1 → length 8
i = 2 → length 7
i = 3 → length 6
i = 4 → length 5
i = 5 → 5 < 5 ❌ stop
*/

for (let i = numbers.length; i > 0; i--) {
  let lastElement = numbers.shift();
  reverseArray.unshift(lastElement);
}
console.log(reverseArray);
