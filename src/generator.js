'use strict';

const { possibleCombinations } = require('./math');

/**
 *
 * @param length
 * @param letters
 * @return {Array}
 */

const lettersCombinations = (length, letters = 3) => {
  const result = [];
  const len = length - letters;
  for (let i = 0; i < len; i++) {
    result[i] = possibleCombinations(length - i, letters)
      - possibleCombinations(length - i - 1, letters);
    if (result[i - 1]) result[i] += result[i - 1];
  }
  result[len] = result[len - 1] + 1 || 1;

  return result;
};

/**
 *
 * @param string
 * @param length
 * @param index
 * @return {{index: Array, letters: Array}}
 */

const generateString = (string, length, index) => {
  let strLeft = string;
  let lengthLeft = 0;
  let currentIndex = 0;
  let stringIndex = 0;
  const result = [];
  const resultIndexes = [];

  for (let i = 0; i < length; i++) {
    const u = lettersCombinations(strLeft.length, length - lengthLeft);

    for (let j = 0; j < u.length; j++) {
      stringIndex++;

      if (u[j] + currentIndex >= index) {
        result.push(strLeft.charAt(j));
        resultIndexes.push(stringIndex);
        strLeft = strLeft.substr(j + 1);
        lengthLeft++;

        if (j > 0) {
          currentIndex += u[j - 1];
        }

        break;
      }
    }
  }

  return { letters: result, index: resultIndexes };
};

module.exports = {
  lettersCombinations,
  generateString,
};
