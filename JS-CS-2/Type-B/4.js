//TODO: 4. Reverse a given string manually using a for loop (without using split/reverse/join).
let str = "somthing is better than nothing";
let reverseStr = "";
for (let i = str.length - 1; i > 0; i--) {
  reverseStr += str[i];
}
console.log(reverseStr);
