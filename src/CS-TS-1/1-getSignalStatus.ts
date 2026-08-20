const getSignalStatus = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 25) {
    return "Poor";
  } else if (percentage > 25 && percentage <= 55) {
    return "Fair";
  } else if (percentage > 55 && percentage <= 85) {
    return "Good";
  }
  return "Excellent";
};
console.log(getSignalStatus(15));
console.log(getSignalStatus(40));
console.log(getSignalStatus(70));
console.log(getSignalStatus(95));
