type Role = "Admin" | "Editor" | "Viewer";
const canEdit = (role: Role): boolean => {
  if (role === "Admin" || role === "Editor") {
    return true;
  }
  return false;
};
console.log(canEdit("Admin"));
console.log(canEdit("Editor"));
console.log(canEdit("Viewer"));
// console.log(canEdit("Guest"));
