const { currency } = require('../common');

const grivna = {
    'euro': 31,
    'dollar': 26.6
};

const dollar = {
    'grivna': 26.6,
    'euro': 0.86
};

const euro = {
    'grivna': 31,
    'dollar': 1.17
};

function moneyExchangeHandler(data) {
    let count = data.howMany;
    let direction = exchangeDirection(data);
    if (direction[0] == direction[1]) {
        return data.howMany;
    }
    switch (direction.join()) { // magic :D
        case [currency[0], currency[1]].join():
            return `${currency[0]} to ${currency[1]} ${count * euro.dollar}`;
        case [currency[1], currency[0]].join():
            return `${currency[1]} to ${currency[0]} ${count * dollar.euro}`;
        case [currency[1], currency[2]].join():
            return `${currency[1]} to ${currency[2]} ${count * dollar.grivna}`;
        case [currency[2], currency[1]].join():
            return `${currency[2]} to ${currency[1]} ${count * grivna.dollar}`;
        case [currency[0], currency[2]].join():
            return `${currency[0]} to ${currency[2]} ${count * euro.grivna}`;
        case [currency[2], currency[1]].join():
            return `${currency[2]} to ${currency[1]} ${count * grivna.dollar}`;
        default:
            return null;
    }

}

function exchangeDirection(data) {
    let from, to;
    for (let currentCurrency of currency) {
        if (currentCurrency == data.from)
            from = currentCurrency;
        if (currentCurrency == data.to)
            to = currentCurrency;
    }
    return [from, to];
}

module.exports = moneyExchangeHandler;