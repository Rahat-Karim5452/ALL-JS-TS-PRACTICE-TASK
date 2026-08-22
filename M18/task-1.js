const calculateBill = (amount, taxRate = 0.05) => {
  return amount * (taxRate + 1);
};
console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.1));
