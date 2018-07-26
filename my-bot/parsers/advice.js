const ParseResult = require('../parse-result');

function adviceParser(input) {
    let template = new RegExp(`(.*) [#@)₴?$0]+`);
    let result = template.exec(input.toLowerCase());
    if (!result) {
        return null;
    }

    return new ParseResult('advice');
}

module.exports = adviceParser;
