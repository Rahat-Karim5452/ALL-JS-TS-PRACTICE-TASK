/* Snippet C
function square(num) {
return num + num; / find the bug
}
console.log(square(4)); / should be 16

i/p: square(4) => o/p: 16
*/
function square(num) {
  return num * num;
}
console.log(square(4));
