
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Invalid argument. Is not an array');

  let result = [];
  const ctlSeqResult = (prev, next) => {
    let shift = 0;
    switch (prev) {
      case "--discard-next":
        shift += -1;
        break;
      case "--double-next":
        shift += 1;
        break;
    }
    switch (next) {
      case "--discard-prev":
        shift += -1;
        break;
      case "--double-prev":
        shift += shift >= 0 ? 1 : 0;
        break;
    }
    return shift;
  };
    
  for (let i = 0, qty = 1; i < arr.length; i++, qty = 1) {
    qty += ctlSeqResult(arr[i-1], arr[i+1]);
    if (arr[i] !== "--discard-prev" && arr[i] !== "--double-prev" &&
        arr[i] !== "--discard-next" && arr[i] !== "--double-next") {
      while (qty > 0){
        result.push(arr[i]);
        qty -= 1;
      }
    }
  }
  return result;
};
