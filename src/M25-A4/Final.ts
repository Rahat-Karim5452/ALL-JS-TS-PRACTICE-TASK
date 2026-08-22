//Problem-01: Battery Level Status
const getBatteryStatus = (percentage: number): string => {
  if (percentage < 0 || percentage > 100) {
    return "Invalid Number";
  }
  if (percentage <= 20) {
    return "Low";
  } else if (percentage <= 50) {
    return "Medium";
  } else if (percentage <= 90) {
    return "High";
  }
  return "Full";
};

//Problem-02: Table Booking Confirmation
interface Booking {
  name: string;
  guests: number;
  time: string;
}
const formatBookingConfirmation = (booking: Booking): string => {
  //   console.log(booking);
  const { name, guests, time } = booking;
  return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
};

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]): number => {
  //   console.log(expenses);
  const total = expenses.reduce((sum, num) => sum + num, 0);
  return total;
};

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";
type TrafficAction = "Stop" | "Slow Down" | "Go";
const getTrafficAction = (light: Light): TrafficAction => {
  if (light === "red") {
    return "Stop";
  } else if (light === "green") {
    return "Go";
  }
  return "Slow Down";
};

//Problem-05: Quiz Score Summary
interface Result {
  total: number;
  average: number;
}
const getQuizSummary = (scores: number[]): Result => {
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
