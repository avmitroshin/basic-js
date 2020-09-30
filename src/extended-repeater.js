const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str_, o) {

  let str;
  let result ="";
  
  opt = {
    repeatTimes: isNaN(+o.repeatTimes) ? 1 : +o.repeatTimes,
    separator: typeof(o.separator) === "undefined" ? "+" : "" + o.separator,
    addition: typeof(o.addition) === "undefined" ? "" : "" + o.addition,
    additionRepeatTimes: isNaN(+o.additionRepeatTimes) ? 1 : +o.additionRepeatTimes,
    additionSeparator: typeof(o.additionSeparator) === "undefined" ? "|" : "" + o.additionSeparator
  };

  if (typeof(str_) === "undefined") return false;
  str = "" + str_;

  
  while (opt.repeatTimes > 0) {
    result += str;
    
    let i = opt.additionRepeatTimes;
    while (i > 0) {
      result += opt.addition;
      if (i > 1) result += opt.additionSeparator;
      i--;
    }

    if (opt.repeatTimes > 1) result += opt.separator;
    opt.repeatTimes--;
  }

  return result;
};
  