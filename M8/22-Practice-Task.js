/* Build a simple login + role-check system that verifies username/password and shows a
different message based on admin/user role — combine everything from this module
(comparison, logical operators, if-else, ternary). */
let username = "rahat";
let password = 12345;
let isAdmin = true;
//Comparison
if (username === "rahat" && password === 12345) {
  console.log(isAdmin ? "admin" : "user");
} else {
  console.log("login failed");
}
