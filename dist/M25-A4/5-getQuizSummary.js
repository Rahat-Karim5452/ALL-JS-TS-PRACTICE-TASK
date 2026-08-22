"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    let total = scores.reduce((sum, num) => sum + num, 0);
    let average = total / scores.length;
    return {
        total,
        average,
    };
};
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=5-getQuizSummary.js.map