// 4. Write a program that checks whether a given value exists inside an array using a
// loop, and prints true or false.

let arr = [10, 30, 4, 22];

//Using includes:
// let exists = arr.includes(20);
// console.log(exists);
let val = 100;
let exist = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === val) {
    exist = true;
    break;
  }
}
console.log(exist);
