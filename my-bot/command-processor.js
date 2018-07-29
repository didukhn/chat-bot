const parsers = require('./parsers');
const HandlerFactory = require('./hadlers');


// facade
class CommandProcessor {
    constructor() {
        this._parsers = parsers;
    }

    process(fromUser) {
        for (let parser of this._parsers) {
            let result = parser(fromUser);
            if (result) {
                let handler = HandlerFactory.getHandler(result.command);

                return this.partialApplication(result.data)(handler);
            }
        }
        return 'Invalid command';
    }

    //Partial Application 
    partialApplication(data) {
        return (handler) => {
            return handler(data);
        }
    }
}

module.exports = { CommandProcessor };
