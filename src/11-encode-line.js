/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return ('');
  }
  const array = str.split('');
  let newString = '';
  let sum = 0;
  let i = array[0];
  array.forEach((item, k) => {
    if (i === item) {
      sum++;
    } else {
      newString += (sum === 1) ? i : sum + i;
      sum = 1;
      i = item;
    }
    if (k === array.length - 1) {
      newString += (sum === 1) ? i : sum + i;
    }
  });
  return newString;
}

module.exports = encodeLine;
