# Studly Caps

Transforms the case of given text into [studly caps](https://en.wikipedia.org/wiki/Studly_caps). Determination of whether a character should be uppercase vs lowercase is handled by a random generator (`seedrandom`).

## Usage

```js
const studlyCaps = require('studly-caps');

// Converts an input string's text case into studly caps
console.log(studlyCaps('hello world'));
// => hELlo worlD

// Accepts a custom seed, defaults to Date.now()
console.log(studlyCaps('hello world', 1563820053356));
// => helLo WORlD
```
