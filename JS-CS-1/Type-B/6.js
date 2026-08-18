//todo:6. Convert a given amount of money in Taka to US Dollars using a fixed conversion
//todo:rate (e.g., 1 USD = 110 BDT).
let tk = 1000;
let usDollar = 110;
let tkToUsDollar = tk / usDollar;
let tkToUSD = parseFloat(tkToUsDollar.toFixed(2));
let usDollarToTk = tk * usDollar;
console.log("Tk to USD: ", tkToUSD);
console.log("USD to Tk: ", usDollarToTk);
