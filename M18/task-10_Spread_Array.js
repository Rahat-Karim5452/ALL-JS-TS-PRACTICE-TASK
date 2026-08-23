/* cloneAndUpdate(arr, index, newValue) — Spread
(Immutable Array Update) Return a new array with the value at index replaced by newValue,
without mutating the original array.
Input: cloneAndUpdate([5, 10, 15], 1, 99)
Output: [5, 99, 15]
(original array still [5, 10, 15]) */
const cloneAndUpdate = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
const original = [5, 10, 15];
console.log(cloneAndUpdate(original, 1, 99));
console.log(original);
