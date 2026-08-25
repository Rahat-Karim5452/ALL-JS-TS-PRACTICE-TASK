/* Task 7.1 — Keys and Values
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
● Get an array of all keys
● Get an array of all
● Delete the pages property using delete. */
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
let keys = Object.keys(book);
console.log(keys);
let values = Object.values(book);
console.log(values);
for (let keys in book) {
  console.log(keys, book[keys]);
}
delete book.pages;
console.log(book);
