function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const currency = [
    'euro',
    'dollar',
    'grivna'
]

module.exports = { getRandomInt, currency };
