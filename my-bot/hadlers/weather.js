const common = require('../common');

function weatherHandler(data) {
    let randomTemp = common.getRandomInt(-10, 30);
    let word = getWord(randomTemp);
    return `The weather is ${word} in ${data.city} ${data.day}, temperature ${randomTemp}C`;
}

function getWord(temperature) {
    if (-10 <= temperature && temperature < -5) {
        return 'very cold';
    }
    if (-5 <= temperature && temperature < 0) {
        return 'cold';
    }
    if (0 <= temperature && temperature < 10) {
        return 'warm';
    }
    if (10 <= temperature && temperature < 30) {
        return 'hot';
    }
}

module.exports = weatherHandler;