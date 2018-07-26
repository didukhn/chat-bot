const ParseResult = require('../parse-result');

function saveNoteParser(command) {
    let template = new RegExp(`save note title: (.+) body: (.+)`);
    let result = template.exec(command.toLowerCase());
    if (!result) {
        return null;
    }
    return new ParseResult('save note', { title: result[1], body: result[2] });
}

function showNoteListParser(command) {
    let template = 'show note list';
    if (command.toLowerCase() != template) {
        return null;
    }

    return new ParseResult('show note list');
}

function showNoteParser(command) {
    let template = new RegExp(`show note (.+)`);
    let result = template.exec(command.toLowerCase());
    if (!result) {
        return null;
    }
    return new ParseResult('show note', { title: result[1] });
}

function deleteNoteParser(command) {
    let template = new RegExp(`(delete note) (.+)`);
    let result = template.exec(command.toLowerCase());
    if (!result) {
        return null;
    }
    return new ParseResult('delete note', { title: result[1] });

}

module.exports = {
    saveNoteParser,
    showNoteListParser,
    showNoteParser,
    deleteNoteParser
};
