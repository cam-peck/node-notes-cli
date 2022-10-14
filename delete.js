const deleteEntry = () => {
  const fs = require('fs')
  const indexToDelete = process.argv[3];
  const json = require('./data.json');
  if (json.notes[indexToDelete]) {
    delete json.notes[indexToDelete];
    const newJSON = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', newJSON, 'utf8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  } else {
    console.log('Sorry, that index number doesn\'t exist.')
  }
}

module.exports = deleteEntry
