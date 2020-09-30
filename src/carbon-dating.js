const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity_) {
  const rate = 0.693 / HALF_LIFE_PERIOD;
  const sampleActivity = isNaN(+sampleActivity_) ? false : +sampleActivity_;

  if (typeof(sampleActivity_) !== "string") return false;
  if (!sampleActivity || (sampleActivity < 0 || sampleActivity > 15)) return false;
  let age = Math.log(MODERN_ACTIVITY / sampleActivity) / rate;
  return Math.ceil(age);
};
