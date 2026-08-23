/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/
const getPassingStudents = (students, threshold) => {
  let filterdStudents = students.filter((student) => {
    // console.log(student);
    // if (student.marks >= threshold) {
    //   return true;
    // } else {
    //   return false;
    // }
    return student.marks >= threshold;
  });
  return filterdStudents;
};
let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "Utsho", marks: 60 },
  { name: "Habib", marks: 59 },
  { name: "Akash", marks: 30 },
];
console.log(getPassingStudents(students, 60));
