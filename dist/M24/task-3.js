"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatPlayerCard = (player) => {
    return `${player.username} is a Level ${player.level} player from ${player.region}.`;
};
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia",
}));
//# sourceMappingURL=task-3.js.map