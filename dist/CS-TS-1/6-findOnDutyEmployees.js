"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    const onDutyEmployees = employees.filter((employee) => employee.onDuty);
    return onDutyEmployees;
};
console.log(findOnDutyEmployees([
    { name: "Abc", onDuty: true },
    { name: "somebody", onDuty: false },
]));
console.log(findOnDutyEmployees([{ name: "Nusrat", onDuty: false }]));
//# sourceMappingURL=6-findOnDutyEmployees.js.map