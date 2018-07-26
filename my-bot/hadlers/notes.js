let notes = [];

function saveNoteHandler(data) {
    notes.push({ ...data })

    return `Note with title: ${data.title} and with desc: ${data.body}`;
}

function showNoteListHandler() {
    if (notes.length == 0)
        return 'Sorry, there are no notes :(';

    return notes.map((x, i) => `${i}. ${x.title} ${x.body}`)
        .join('\n')
}

function showNoteHandler(data) {
    if (notes.length == 0)
        return 'Sorry, there are no notes :(';

    return notes.filter(x => x.title == data.title)
        .map((x, i) => `${i}. ${x.title} ${x.body}`)
        .join('\n');
}

function deleteNoteHandler(data) {
    notes = notes.filter(x => data.title != x.title);
    return `Note(s) with title: ${data.title} deleted`;
}

module.exports = {
    saveNoteHandler,
    showNoteListHandler,
    showNoteHandler,
    deleteNoteHandler
};