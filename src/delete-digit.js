const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  let numArr = [];
  while (n !== 0){
    numArr.push(n%10);
    n = Math.floor(n/10);
  }
  for (let i = 0; i < numArr.length; i++){
    let count = 0;
    for (k = numArr.length-1; k >= 0; k-- ){
      if (k!==i){
        count = count * 10 + numArr[k];
      }
    }
    res = Math.max(count, res);
  }
  return res;
}

module.exports = {
  deleteDigit
};
