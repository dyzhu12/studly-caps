const seedrandom = require('seedrandom');

function studlyCaps (str, seed = Date.now()) {
    if (typeof str !== 'string') {
        return str;
    }

    const rng = seedrandom(seed);

    return str.split('')
        .map(c => rng() >= 0.5 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}

module.exports = studlyCaps;
