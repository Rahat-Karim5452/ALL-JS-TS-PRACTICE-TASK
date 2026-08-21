"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRentalFee = (vehicle, minutes) => {
    if (vehicle === "scooter") {
        return 10 + minutes * 2;
    }
    else if (vehicle === "ebike") {
        return 10 + minutes * 3;
    }
    return 10 + minutes * 5;
};
console.log(calculateRentalFee("scooter", 20));
console.log(calculateRentalFee("ebike", 20));
console.log(calculateRentalFee("moped", 20));
//# sourceMappingURL=task-10.js.map