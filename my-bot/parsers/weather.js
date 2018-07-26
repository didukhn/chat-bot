const ParseResult = require('../parse-result');

const dayOfWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

const cityName = [
    'lviv',
    'kyiv',
    'kharkiv',
    'odessa',
    'dnipro'
]

function weatherParser(command) {
    let template1 = new RegExp(`what is the weather on (${dayOfWeek.join('|')}) in (${cityName.join('|')})?`)
    let template2 = new RegExp(`what is the weather (today|tomorrow) in (${cityName.join('|')})?`)
    let result1 = template1.exec(command.toLowerCase());
    let result2 = template2.exec(command.toLowerCase());
    let result = result1 || result2;
    if (!result) {
        return null;
    }

    return new ParseResult('weather', { day: result[1], city: result[2] });
}


module.exports = weatherParser;
