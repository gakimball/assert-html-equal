var assert = require('assert');
var HTMLEqual = require('..');

describe('Assert HTML Equal', function() {
  it('compares two HTML strings', function() {
    HTMLEqual('<table><tr></tr></table>', '<table><tr></tr></table>');
  });

  it('throws an exception if strings don\'t match', function() {
    assert.throws(function() {
      HTMLEqual('<table><tr><td></td></tr></table>', '<div></div>');
    }, Error);
  });
});
