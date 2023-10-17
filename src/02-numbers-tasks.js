/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Number(Math.PI) * radius;
}

function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.hypot(x1 - x2, y1 - y2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(/* a, b */) {
  throw new Error('Not implemented');
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const angle = Math.atan2(y2, x2) - Math.atan2(y1, x1);
  return angle > 0 ? angle : angle * -1;
}

function getLastDigit(value) {
  return value < 10 ? value : Number(value.toString().slice(-1));
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt((a ** 2) + (b ** 2) + (c ** 2));
}

function roundToPowerOfTen(num, dec) {
  return Math.round(num / Math.pow(10, dec)) * Math.pow(10, dec);
}

function isPrime(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function toNumber(value, def) {
  if (!Number(value)) {
    return def;
  }
  return Number(value);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
