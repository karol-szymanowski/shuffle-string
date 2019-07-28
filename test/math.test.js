'use strict';

const math = require('../src/math');

describe('factorial', () => {
  it('should calculate factorial', () => {
    const runs = [
      { num: 0, result: 1 },
      { num: 1, result: 1 },
      { num: 2, result: 2 },
      { num: 3, result: 6 },
      { num: 4, result: 24 },
      { num: 5, result: 120 },
      { num: 6, result: 720 },
      { num: 7, result: 5040 },
      { num: 8, result: 40320 },
      { num: 9, result: 362880 },
    ];
    runs.forEach((run) => {
      const factorial = math.factorial(run.num);
      expect(factorial).to.equals(run.result);
    });
  });

  it('should throw if provided number is equal less than 0', () => {
    function test() {
      return math.factorial(-1);
    }

    expect(test).to.throw();
  });
});

describe('possibleCombinations', () => {
  it('should calculate number of possible combination', () => {
    const runs = [
      { a: 1, b: 1, result: 1 },
      { a: 2, b: 1, result: 2 },
      { a: 6, b: 3, result: 20 },
      { a: 8, b: 3, result: 56 },
      { a: 10, b: 3, result: 120 },
      { a: 10, b: 5, result: 252 },
      { a: 10, b: 7, result: 120 },
      { a: 100, b: 100, result: 1 },
    ];

    runs.forEach((run) => {
      const possibleOutcomes = math.possibleCombinations(run.a, run.b);

      expect(possibleOutcomes).to.equal(run.result);
    });
  });


  it('should throw when a < b', () => {
    function test() {
      return math.possibleCombinations(1, 3);
    }

    expect(test).to.throw();
  });
});
