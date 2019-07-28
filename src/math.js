'use strict';

/**
 *
 * @param num
 * @return {number}
 */

const factorial = (num) => {
  if (num < 0) throw new Error('Non negative numbers only');
  let rval = 1;
  for (let i = 2; i <= num; i++) rval *= i;
  return rval;
};

/**
 *
 * @param a
 * @param b
 * @return {number}
 */

const possibleCombinations = (a, b) => {
  if (a - b < 0) throw new Error(`Wrong A value, A should be equal or lower than ${b}`);
  return factorial(a) / (factorial(b) * factorial(a - b));
};

module.exports = {
  factorial,
  possibleCombinations,
};
