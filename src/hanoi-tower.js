const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(qty, speed) {
  return {
    turns: Math.pow(2, qty) - 1,
    seconds: Math.floor((Math.pow(2, qty) - 1)  * 60 * 60 / speed)
  }
};
