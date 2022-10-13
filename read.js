const json = require('./data.json');

const getIndex = process.argv[2];


const getNote = json.notes[getIndex];
console.log(getNote);

const readFile = (index) => {
  const json = require('./data.json');
  const getIndex = index;
  const getNote = json.notes[getIndex];
  return getNote;
}
