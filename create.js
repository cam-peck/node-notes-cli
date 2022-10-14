


// const entryId = json[nextId];
// json.notes.entryId = addText;
const fs = require('fs');

const create = () => {
const json = require('./data.json');
const addText = process.argv[3];
const entryId = json.nextId;
json.notes[entryId] = addText;
json.nextId++;
}

module.exports = create;
