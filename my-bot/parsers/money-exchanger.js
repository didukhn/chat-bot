const ParseResult = require('../parse-result');
const { currency } = require('../common');

function exchangeParser(command) {
    let template = new RegExp(`convert ([1-9][0-9]*) (${currency.join('|')}) to (${currency.join('|')})`);
    let result = template.exec(command.toLowerCase());
    if (!result) {
        return null;
    }
    return new ParseResult('convert', { howMany: result[1], from: result[2], to: result[3] });
}

module.exports = exchangeParser;
