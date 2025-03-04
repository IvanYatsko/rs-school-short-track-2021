/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let finish = array.length;
  const result = 0;
  while (!result) {
    const middle = Math.floor((start + finish) / 2);
    if (value > array[middle]) {
      start = middle;
    } else if (value < array[middle]) {
      finish = middle;
    } else {
      return middle;
    }
  }
  return result;
}

module.exports = findIndex;
