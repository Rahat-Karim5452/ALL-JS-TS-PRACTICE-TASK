interface Employee {
  name: string;
  onDuty: boolean;
}

const findOnDutyEmployees = (employees: Employee[]) => {
  const onDutyEmployees = employees.filter((employee) => employee.onDuty);
  return onDutyEmployees;
};
console.log(
  findOnDutyEmployees([
    { name: "Abc", onDuty: true },
    { name: "somebody", onDuty: false },
  ]),
);
console.log(findOnDutyEmployees([{ name: "Nusrat", onDuty: false }]));
