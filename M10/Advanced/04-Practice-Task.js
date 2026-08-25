// 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]
let arr = [1, [2, 3], [4, [5, 6]]];
let flatArray = arr.flat(2);
console.log(flatArray);
