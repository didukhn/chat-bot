const ParseResult = require('../parse-result');

function quoteParser(command) {
    let template = 'show quote';
    if (command.toLowerCase() != template) {
        return null;
    }
    return new ParseResult('show quote');
}

module.exports = quoteParser;
