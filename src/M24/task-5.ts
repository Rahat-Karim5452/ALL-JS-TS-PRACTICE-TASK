interface Player {
  name: string;
  scores: number[];
}

interface Result {
  name: string;
  average: number;
  rank: string;
}
const getPlayerStats = (player: Player): Result => {
  const playerScore = player.scores;
  if (playerScore.length === 0) {
    return {
      name: player.name,
      average: 0,
      rank: "Rookie",
    };
  }
  const total = playerScore.reduce((sum, score) => sum + score, 0);
  const average = total / playerScore.length;
  const rank = average >= 80 ? "MVP" : "Rookie";
  const result = {
    name: player.name,
    average,
    rank,
  };
  return result;
};
// { name: "Nova", average: 87.5, rank: "MVP" }
console.log(
  getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80],
  }),
);

console.log(
  getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50],
  }),
);
console.log(
  getPlayerStats({
    name: "Azex",
    scores: [],
  }),
);
