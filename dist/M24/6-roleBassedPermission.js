"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    if (role === "Admin" || role === "Editor") {
        return true;
    }
    return false;
};
console.log(canEdit("Admin"));
console.log(canEdit("Editor"));
console.log(canEdit("Viewer"));
// console.log(canEdit("Guest"));
//# sourceMappingURL=6-roleBassedPermission.js.map