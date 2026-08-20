interface Result {
  total: number;
  average: number;
}
const getDistanceSummary = (distances: number[]): Result => {
  const total: number = distances.reduce((sum, num) => sum + num, 0);
  const average: number = total / distances.length;

  return {
    total: total,
    average: isNaN(average) ? 0 : average,
  };
};
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([10, 10]));
console.log(getDistanceSummary([]));
