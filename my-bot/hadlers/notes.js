let notes = [];

function saveNoteHandler(data) {
    notes.push({ ...data })

    // FIX: added fields to message . . .
    return `Note with title: ${data.title} and with desc: ${data.description}`;
}

function showNoteListHandler() {
    // FIX: simplified
    // for (let obj of notes) {
    //     console.log(obj);
    // }

    return notes.map((x, i) => `${i}. ${x.title} ${x.body}`)
        .join('\n')
}

function showNoteHandler(data) {
    return notes.filter(x => x.title == data.title)
        .map((x, i) => `${i}. ${x.title} ${x.body}`)
        .join('\n');

    // FIX: simplified
    // for (let obj of notes) {
    //     if (obj.title == data.title) {
    //         return console.log(`Title: "${obj.title}" body: "${obj.body}"`)
    //     }
    //     else return null;
    // }
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