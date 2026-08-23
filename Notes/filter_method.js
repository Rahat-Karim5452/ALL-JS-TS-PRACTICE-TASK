/*  
1.Filter Or Find Method e Boolean value Return Korte Hoy.
2.Jei element Er Jnno true return Korbo,sei element ta count Korbe.
3.Jei element Er Jnno false return Korbo,sei element ta count Korbe na.
4.Conditioner upor base Kore true false return Korte Hobe;
*/
const getPassingStudents = (students, threshold) => {
  let filterdStudents = students.filter((student) => {
    // console.log(student);
    if (student.name === "Rafi") {
      return true;
    }
    return false;
  });
  console.log(filterdStudents);
};
let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "Utsho", marks: 60 },
  { name: "Habib", marks: 59 },
  { name: "Akash", marks: 30 },
];
console.log(getPassingStudents(students, 60));
