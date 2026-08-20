"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (weather) => {
    if (weather === "sunny") {
        return "Wear sunscreen";
    }
    else if (weather === "cloudy") {
        return "Bring a light jacket";
    }
    return "Carry an umbrella";
};
console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));
// console.log(getWeatherAdvice("snowy"));//Eror Asbe;
//# sourceMappingURL=5-getWeatherAdvice.js.map