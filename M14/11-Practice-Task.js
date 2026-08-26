/*Problem Statement: Should convert Celsius to Fahrenheit using the formula (C × 9/5) + 32.

i/p: 0 => o/p: 32


function celsiusToFahrenheit(celsius) {
return celsius * 9 / 5 + 3; // find the bug
}
console.log(celsiusToFahrenheit(0)); // Expected: 32
*/

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32; // find the bug
}
console.log(celsiusToFahrenheit(0)); // Expected: 32
