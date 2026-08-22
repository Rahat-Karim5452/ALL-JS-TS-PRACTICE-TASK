//Spread + Immutable Update
const promoteEmployee = (employee, newTitle) => {
  return {
    ...employee,
    title: newTitle,
  };
};
console.log(
  promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"),
);
