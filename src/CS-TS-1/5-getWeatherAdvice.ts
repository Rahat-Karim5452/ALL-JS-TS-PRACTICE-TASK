type Weather = "sunny" | "rainy" | "cloudy";
const getWeatherAdvice = (weather: Weather): string => {
  if (weather === "sunny") {
    return "Wear sunscreen";
  } else if (weather === "cloudy") {
    return "Bring a light jacket";
  }
  return "Carry an umbrella";
};
console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));
// console.log(getWeatherAdvice("snowy"));//Eror Asbe;
