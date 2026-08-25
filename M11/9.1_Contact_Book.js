/* Build a small "contact" system:
let contact = {
name: "Alex Johnson",
email: "ALEX@EMAIL.COM",
phone: "555-1234"
};


1. Convert the email to lowercase and update the object.
2. Loop through the contact object and print each key-value pair.
3. Add a new property favoriteWords: [] (an array) — push 3 words to it.
4. Reverse the name string just for fun using one of your three reverse functions from
Task 4.1.
5. Check if the email includes "@email.com" (case-insensitive) and log a confirmation
message.

*/

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234",
};
contact.email = contact.email.toLowerCase();
// console.log(contact);
for (let keys in contact) {
  console.log(keys, contact[keys]);
}
contact.favoriteWords = [];
// console.log(contact);
contact.favoriteWords.push("coding");
contact.favoriteWords.push("JavaScript");
contact.favoriteWords.push("learning");

//Reverse
contact.name = contact.name.split("").reverse().join("");
console.log(contact);
if (contact.email.includes("@email.com")) {
  console.log("Email confirmed");
}
