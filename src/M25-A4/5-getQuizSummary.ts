const getQuizSummary = (scores: number[]): Result => {
  let total = scores.reduce((sum, num) => sum + num, 0);
  let average = total / scores.length;
  return {
    total,
    average: isNaN(average) ? 0 : average,
  };
};
interface Result {
  total: number;
  average: number;
}
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
