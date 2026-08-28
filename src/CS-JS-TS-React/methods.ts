// ! Most Important : 3.filter(),map(),find(),includes ()
/*
 * filter() => delete
 * map() => showing data on the ui
 * find() => find out specific data
 * includes => data exist or Not in a array
 */
const numbers = [1, 2, 3, 4, 5];
// console.log("=========filter()=========");
// const newArr = numbers.filter((num) => num !== 2);
// console.log(newArr);

// console.log("=========map()=========");
// const newArr = numbers.map((num) => num + 1);
// console.log(newArr);

console.log("=========find ()=========");
// it's find only 'one'
const newArr = numbers.find((num) => num > 3);
console.log(newArr);

// console.log("=========includes()=========");
const string = "hello! i am fine";
console.log(string.includes("am"));
