var assert = require('assert').equal;
var beautify = require('js-beautify').html;

var OPTS = {
  indent_size: 2,
  quiet: true
}

module.exports = function(actual, expected, message) {
  actual = beautify(actual, OPTS);
  expected = beautify(expected, OPTS)

  assert(actual, expected, message);
}
