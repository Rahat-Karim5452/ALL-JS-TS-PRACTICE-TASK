/*
 * 1.Fulfilled
 * 2.Pending
 * 3.reject(error)
 */
const promise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("i have data");
  } else {
    reject("Some Error!");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
