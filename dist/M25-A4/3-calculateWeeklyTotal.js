"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklyTotal = (expenses) => {
    //   console.log(expenses);
    const total = expenses.reduce((sum, num) => sum + num, 0);
    return total;
};
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
// calculateWeeklyTotal([1, 2, 3, 4]);
//# sourceMappingURL=3-calculateWeeklyTotal.js.map