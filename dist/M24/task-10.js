"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRentalFee = (vehicle, minutes) => {
    if (vehicle === "scooter") {
        return 10 + minutes * 2;
    }
    else if (vehicle === "ebike") {
        return 15 + minutes * 3;
    }
    return 25 + minutes * 5;
};
console.log(calculateRentalFee("scooter", 20));
console.log(calculateRentalFee("ebike", 20));
console.log(calculateRentalFee("moped", 20));
console.log(calculateRentalFee("moped", 0));
// console.log(calculateRentalFee("bike", 0));
//# sourceMappingURL=task-10.js.map