// Template Literals
const buildProfileCard = (user) => {
  const { name, title, company } = user;
  return `${name} 
  ${title} at ${company}`;
};
console.log(
  buildProfileCard({
    name: "Arif",
    title: "Developer",
    company: "Programming Hero",
  }),
);
// console.log(buildProfileCard());
