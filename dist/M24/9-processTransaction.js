"use strict";
// type Transaction = {
//   type: "deposit" | "withdraw";
//   amount: number;
// };
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        return (balance += transaction.amount);
    }
    else if (transaction.type === "withdraw") {
        if (balance < transaction.amount) {
            return "Insufficient Balance";
        }
    }
    return (balance -= transaction.amount);
};
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
//# sourceMappingURL=9-processTransaction.js.map