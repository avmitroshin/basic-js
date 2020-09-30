/*
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};
*/

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.level = 0;
    this.maxLevel = 0;
  }

  calculateDepth(arr, isFirstInChain = true) {
    if (Array.isArray(arr)) {
      this.level += +1;
      this.maxLevel = this.maxLevel < this.level ? this.level : this.maxLevel;
      let i = 0;
      while (i < arr.length) {
        this.calculateDepth(arr[i++], false);
      }
      this.level -= +1;
    }
    if (isFirstInChain) {
      let result = this.maxLevel;
      this.level = 0;
      this.maxLevel = 0;
      return result;
    }
    return this.maxLevel;
  }
};