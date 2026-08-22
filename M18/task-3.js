//Spread Operator
const getLowestPrice = (prices) => {
  let lowest = [...prices];
  return Math.min(...lowest);
};
console.log(getLowestPrice([340, 120, 560, 90]));
