"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderNotification = (notification) => {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post.`;
    }
    if (notification.type === "system") {
        if (notification.actionUrl) {
            return `System: ${notification.message} (Tap to view)`;
        }
        return `System: ${notification.message}`;
    }
    return "";
};
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({
    type: "system",
    message: "Your subscription is expiring soon.",
    actionUrl: "/billing",
}));
//# sourceMappingURL=task-8.js.map