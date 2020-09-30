const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) return false;

  let teamName = [];
  members.forEach((name_) => {
    if (typeof(name_) !== "string") return false;
    let name = name_.toUpperCase().trim();
    if (name.match(/^[A-Z _-]+$/) === null || name.length < 1) return;

    teamName.push(name[0]);
  });


  return teamName.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
};

