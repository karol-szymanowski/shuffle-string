'use strict';

const generator = require('../src/generator');

describe('lettersCombinations', () => {
  it('should calculate range of indexes for each letter', () => {
    const runs = [
      { lenght: 1, numberOfLetters: 1, result: [1] },
      { lenght: 3, numberOfLetters: 3, result: [1] },
      { lenght: 6, numberOfLetters: 3, result: [10, 16, 19, 20] },
      { lenght: 10, numberOfLetters: 6, result: [126, 182, 203, 209, 210] },
      {
        lenght: 15,
        numberOfLetters: 3,
        result: [91, 169, 235, 290, 335, 371, 399, 420, 435, 445, 451, 454, 455],
      },
    ];

    runs.forEach((run) => {
      const indexes = generator.lettersCombinations(run.lenght, run.numberOfLetters);

      expect(indexes).to.be.an('array').that.eql(run.result);
    });
  });

  it('should return empty array when length < number of letters to extract', () => {
    const test = generator.lettersCombinations(1, 3);
    expect(test).to.be.an('array').that.is.empty;
  });
});

describe('generateString', () => {
  it('should return string (and indexes for this string)', () => {
    const runs = [
      {
        string: 'test', outputLetters: 3, index: 2, result: 'tet',
      },
      {
        string: '123456', outputLetters: 3, index: 2, result: '124',
      },
      {
        string: '123456', outputLetters: 3, index: 12, result: '235',
      },
      {
        string: '123456', outputLetters: 4, index: 12, result: '2346',
      },
    ];

    runs.forEach((run) => {
      const output = generator.generateString(run.string, run.outputLetters, run.index);

      expect(output.letters).to.be.an('array');
      expect(output.letters.length).to.equal(run.outputLetters);
      expect(output.letters.join('')).to.equal(run.result);
      expect(output.index).to.be.an('array');
      expect(output.index.length).to.equal(run.outputLetters);
    });
  });
});
