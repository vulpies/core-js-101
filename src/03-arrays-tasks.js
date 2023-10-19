/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
function findElement(arr, value) {
  const index = arr.indexOf(value);
  return index || '-1';
}

function generateOdds(len) {
  const arr = Array.from({ length: 50 }, (value, index) => index);

  return arr.filter((n) => n % 2).slice(0, len);
}

function doubleArray(arr) {
  return Array(2).fill(arr).flat();
}

function getArrayOfPositives(arr) {
  return arr.filter((item) => item > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter((item) => Boolean(item));
}

function getUpperCaseStrings(arr) {
  return arr.map((item) => item.toUpperCase());
}

function getStringsLength(arr) {
  const newArr = [];
  arr.map((item) => newArr.push(item.length));

  return newArr;
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.join('\n');
}

function toArrayOfSquares(arr) {
  return arr.map((item) => item ** 2);
}

function getMovingSum(arr) {
  const newArr = [];
  arr.reduce((a, b, i) => newArr[i] = a + b, 0);
  return newArr;
}

function getSecondItems(arr) {
  return arr.filter((item, i) => i % 2 !== 0);
}

function propagateItemsByPositionIndex(arr) {
  const result = arr.map((item, i) => {
    const newArr = new Array(i + 1);
    newArr.fill(item);
    return newArr;
  });

  return [].concat(...result);
}

function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
  const res = arr.filter((item) => typeof item === 'number' && item > 0);
  return res.length;
}

function sortDigitNamesByNumericOrder(arr) {
  const stringNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return arr.sort((a, b) => stringNums.indexOf(a) - stringNums.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function getFalsyValuesCount(arr) {
  // eslint-disable-next-line no-extra-boolean-cast
  const res = arr.filter((item) => !Boolean(item));
  return res.length;
}

function findAllOccurrences(arr, item) {
  let count = 0;

  arr.map((c) => {
    if (c === item) {
      count += 1;
    }
  });
  return count;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => (a.country.localeCompare(b.country) === 0 ? a.city.localeCompare(b.city) : a.country.localeCompare(b.country)));
}

/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(/* n */) {
  throw new Error('Not implemented');
}

function getIntervalArray(start, end) {
  return [...Array(end - start + 1).keys()].map((item) => item + start);
}

function distinct(arr) {
  return [...new Set(arr)];
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error('Not implemented');
}


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(/* arr, childrenSelector */) {
  throw new Error('Not implemented');
}


/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(/* arr, indexes */) {
  throw new Error('Not implemented');
}
// getElementByIndexes([[1, 2], [3, 4], [5, 6]], [0, 0])

function swapHeadAndTail(arr) {
  if (arr.length < 4) {
    return arr.reverse();
  }

  const middle = Math.ceil(arr.length / 2);

  const head = arr.slice(0, middle);
  const tail = arr.slice(middle);

  return tail.concat(head);
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
