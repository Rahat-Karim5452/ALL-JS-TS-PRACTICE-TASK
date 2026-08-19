interface Student {
  name: string;
  marks: number[];
}
interface Result {
  name: string;
  average: number;
  result: string;
}
const getStudentResult = (student: Student): Result => {
  const marks: number[] = student.marks;
  const totalMarks: number = marks.reduce((acc, mark) => acc + mark, 0);
  const avg: number = totalMarks / marks.length;
  const result: string = avg >= 40 ? "Passed" : "Failed";

  //   const rslt = {
  //     name: student.name,
  //     average: avg,
  //     result: result,
  //   };

  return {
    name: student.name,
    average: avg,
    result, //property name and var name same ekta rakhlei hbe
  };
};
console.log(
  getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85],
  }),
);

console.log(
  getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25],
  }),
);
