"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerStats = (player) => {
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
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80],
}));
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50],
}));
console.log(getPlayerStats({
    name: "Azex",
    scores: [],
}));
//# sourceMappingURL=task-5.js.map