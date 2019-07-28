'use strict';

const math = require('./math');
const generator = require('./generator');

module.exports = {
  math,
  generate: generator.generateString,
};
