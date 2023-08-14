// const reverseString = function (string) {
//   let length = string.length;
//   const stringArray = string.split("");
//   const array = [];
//   for (let i = length - 1; i >= 0; i--) {
//     array[i] = stringArray.shift();
//   }
//   return array.join("");
// };

const reverseString = function (string) {
  return string.split("").reverse().join("");
};
// Do not edit below this line
module.exports = reverseString;
