const weatherHandler = require('./weather');
const moneyExchangeHandler = require('./money-exchange');
const adviceHandler = require('./advice');
const quoteHandler = require('./quote');
const {
    saveNoteHandler,
    showNoteListHandler,
    showNoteHandler,
    deleteNoteHandler
} = require('./notes');

//Factory
class HandlerFactory {
    static getHandler(command) {
        switch (command) {
            case 'weather':
                return weatherHandler;
            case 'show quote':
                return quoteHandler;

            case 'save note':
                return saveNoteHandler;
            case 'show note list':
                return showNoteListHandler;
            case 'show note':
                return showNoteHandler;
            case 'delete note':
                return deleteNoteHandler;

            case 'advice':
                return adviceHandler;
            case 'convert':
                return moneyExchangeHandler;
            default:
                throw new Error("sorry michael it's just business"); // :)
        }
    }
}

module.exports = HandlerFactory;