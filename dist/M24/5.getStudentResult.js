"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    const avg = totalMarks / marks.length;
    const result = avg >= 40 ? "Passed" : "Failed";
    //   const rslt = {
    //     name: student.name,
    //     average: avg,
    //     result: result,
    //   };
    return {
        name: student.name,
        average: avg,
        result: result,
    };
};
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85],
}));
//# sourceMappingURL=5.getStudentResult.js.map