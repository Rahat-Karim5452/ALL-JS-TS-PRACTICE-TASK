"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTrafficAction = (light) => {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "green") {
        return "Go";
    }
    return "Slow Down";
};
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));
// console.log(getTrafficAction('jdhf'));
//# sourceMappingURL=4-getTrafficAction.js.map