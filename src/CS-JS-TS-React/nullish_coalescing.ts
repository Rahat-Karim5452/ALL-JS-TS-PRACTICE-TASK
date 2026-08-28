//* Nullish coalescing => (null,undefined) => only ei duitar khetre use krte hobe
const username = undefined;
// const username = null;

// using if else
if (username) {
  //   console.log(username);
} else {
  //   console.log("Loading...");
}

//Ternary:
// username ? console.log(username) : console.log("Loading...");

// nullish coalescing
// username ?? console.log("Loading...");
console.log(username ?? "Loading...");
