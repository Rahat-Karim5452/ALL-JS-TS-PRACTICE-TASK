type Light = "red" | "yellow" | "green";
const getTrafficAction = (light: Light): string => {
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
