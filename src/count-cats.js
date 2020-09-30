const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  
  backyard.forEach((arr) => { 
    let cat = "^^";
    count += (arr.filter((x) => x === cat)).length;
  });
  
  return count;
};
