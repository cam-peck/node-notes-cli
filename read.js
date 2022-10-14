const read = function read() {
  const json = require('./data.json');
  for (const key in json.notes) {
    const entryNumbers = key;
    const entryNote = json.notes[key];
    console.log(`${entryNumbers}: ${entryNote}`)
  }
}

module.exports = read;
