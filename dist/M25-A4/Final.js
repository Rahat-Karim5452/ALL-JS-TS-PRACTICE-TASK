"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem-01: Battery Level Status
const getBatteryStatus = (percentage) => {
    if (percentage < 0 || percentage > 100) {
        return "Invalid Number";
    }
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
};
const formatBookingConfirmation = (booking) => {
    //   console.log(booking);
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
};
//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses) => {
    //   console.log(expenses);
    const total = expenses.reduce((sum, num) => sum + num, 0);
    return total;
};
const getTrafficAction = (light) => {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "green") {
        return "Go";
    }
    return "Slow Down";
};
const getQuizSummary = (scores) => {
    const total = scores.reduce((sum, num) => sum + num, 0);
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0,
        };
    }
    const average = total / scores.length;
    return {
        total,
        average,
    };
};
//# sourceMappingURL=Final.js.map