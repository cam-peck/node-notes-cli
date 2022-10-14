const create = () => {
  const fs = require('fs');
  const json = require('./data.json');
  const addText = process.argv[3];
  const entryId = json.nextId;
  json.notes[entryId] = addText;
  json.nextId++;
  const newJSON = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', newJSON, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = create;
