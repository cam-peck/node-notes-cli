const json = require('./data.json');


const read = function read() {
  for (const key in json.notes) {
    const entryNumbers = key;
    const entryNote = json.notes[key];
    console.log(`${entryNumbers}: ${entryNote}`)
  }
}

module.exports = read;
