const sumAll = function (start, end) {
  let final = 0;
  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return "ERROR";
  }
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }
  for (let i = start; i <= end; i++) {
    final += i;
  }
  return final;
};

// Do not edit below this line
module.exports = sumAll;
