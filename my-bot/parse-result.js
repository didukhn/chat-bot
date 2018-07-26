class ParseResult {
    constructor(command, data = {}) {
        this._command = command;
        this._data = data;
    }

    get command() {
        return this._command;
    }

    get data() {
        return this._data;
    }
}

module.exports = ParseResult;