const seedrandom = require('seedrandom');

function studlyCaps(str, seed = Date.now()) {
    if (typeof str !== 'string') {
        return str;
    }

    const rng = seedrandom(seed);

    return str.split('').map((c) => {
        const transform = rng() >= 0.5 ? 'toUpperCase' : 'toLowerCase';
        return c[transform]();
    }).join('');
}

module.exports = studlyCaps;
