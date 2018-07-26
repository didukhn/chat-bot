const adviceParser = require('./advice');
const exchangeParser = require('./money-exchanger');
const weatherParser = require('./weather');
const quoteParser = require('./quote');
const {
    saveNoteParser,
    deleteNoteParser,
    showNoteListParser,
    showNoteParser
} = require('./notes');

//order is important. Works like a routes
const parsers = [
    saveNoteParser,
    exchangeParser,
    showNoteListParser,
    showNoteParser,
    deleteNoteParser,

    weatherParser,
    quoteParser,
    adviceParser,
];

module.exports = parsers;