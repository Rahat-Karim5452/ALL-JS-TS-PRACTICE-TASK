// type Transaction = {
//   type: "deposit" | "withdraw";
//   amount: number;
// };

interface Deposit {
  type: "deposit";
  amount: number;
}
interface Withdrawal {
  type: "withdraw";
  amount: number;
}

const processTransaction = (
  balance: number,
  transaction: Deposit | Withdrawal,
): number | string => {
  if (transaction.type === "deposit") {
    return (balance += transaction.amount);
  } else if (transaction.type === "withdraw") {
    if (balance < transaction.amount) {
      return "Insufficient Balance";
    }
  }
  return (balance -= transaction.amount);
};
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
