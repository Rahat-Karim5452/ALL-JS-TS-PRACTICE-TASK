const arr = [1, 2, 3, 4];
const newArr = arr;
newArr.push(5);
newArr.push(6);
console.log("=======Normal Assign======");
console.log("New Array: ", newArr);
console.log("Original Array: ", arr);

console.log("=======Spread Opreator======");
const arr2 = [1, 2, 3, 4];
const newArr2 = [...arr];
newArr2.push(5);
newArr2.push(6);
console.log("New Array: ", newArr2);
console.log("Original Array: ", arr2);
