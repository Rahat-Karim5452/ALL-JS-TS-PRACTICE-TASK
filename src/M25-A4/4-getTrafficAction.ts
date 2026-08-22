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
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));
// console.log(getTrafficAction('jdhf'));
