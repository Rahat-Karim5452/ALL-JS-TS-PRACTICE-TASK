"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBatteryStatus = (percentage) => {
    if (percentage >= 0 && percentage <= 100) {
        if (percentage >= 0 && percentage <= 20) {
            return "Low";
        }
        else if (percentage >= 21 && percentage <= 50) {
            return "Medium";
        }
        else if (percentage >= 51 && percentage <= 90) {
            return "High";
        }
        return "Full";
    }
    return "Invalid Number";
};
console.log(getBatteryStatus(10));
console.log(getBatteryStatus(35));
console.log(getBatteryStatus(75));
console.log(getBatteryStatus(100));
console.log(getBatteryStatus(101));
console.log(getBatteryStatus(-1));
//# sourceMappingURL=1-getBatteryStatus.js.map