const removeFromArray = function (array, ...Args) {
  for (const arg of Args) {
    let index = array.indexOf(arg);
    if (index != -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
