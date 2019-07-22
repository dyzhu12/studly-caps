const assert = require('assert');
const studlyCaps = require('../lib/studlyCaps');

describe('Studly Caps', function () {
    it('transforms the text case of a given string', function () {
        assert.strictEqual(studlyCaps('hello world', 0), 'heLLO WORlD');
    });

    describe('given a non-string input', function () {
        it('returns the input without modifying it', function () {
            assert.strictEqual(studlyCaps(1), 1);
        });

        it('returns the input without modifying it, regardless of seed', function () {
            assert.strictEqual(studlyCaps(1, 0), 1);
        });
    });

    it('handles special characters', function () {
        assert.strictEqual(studlyCaps('Omg, nobody~ understands me!', 0), 'omG, nOBOdY~ UNDERstAnDs me!');
    });

    it('handles numbers', function () {
        assert.strictEqual(studlyCaps('l33t c0der', 0), 'l33T c0DEr');
    });
});
