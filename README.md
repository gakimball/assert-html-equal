# assert-html-equal

Checks that two HTML strings are equal. The two strings are pretty-formatted before being compared, to ensure differences in whitespace, tabs, etc. don't mess up the comparison.

## Usage

```bash
npm install assert-html-equal
```

```js
var htmlEqual = require('assert-html-equal');

// Works great with multiline strings!
var actual = '<table></table>';
var expected = `
  <table></table>
`;
var message = 'HTML output is correct';

htmlEqual(actual, expected, message);
```

## Local Development

```bash
git clone https://github.com/gakimball/assert-html-equal
cd assert-html-equal
npm install
npm test
```
