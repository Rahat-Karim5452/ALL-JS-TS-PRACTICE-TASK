"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canAccessOfflineMode = (tier) => {
    if (tier === "free") {
        return false;
    }
    else if (tier === "premium") {
        return true;
    }
    return true;
};
console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));
// console.log(canAccessOfflineMode("student"));
//# sourceMappingURL=task-6.js.map