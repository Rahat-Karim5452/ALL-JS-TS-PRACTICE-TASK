//TODO:7. Given an object representing a book, use Object.keys() and Object.values() to print all of its property names and values separately.
let Book = {
  name: "Somthing",
  year: 2019,
  writter: "abc",
};
let keys = Object.keys(Book);
console.log(keys);
let values = Object.values(Book);
console.log(values);
