/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/
const findUserById = (users, id) => {
  let findUser = users.find((user) => {
    // console.log(user, "user");
    return user.id === id;
  });
  if (!findUser) return "User not found";
  return findUser;
};
let users = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Karim" },
];
console.log(findUserById(users, 2));
console.log(findUserById(users, 5));
