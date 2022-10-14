const update = () => {
  const fs = require('fs')
  const index = process.argv[3];
  const json = require('./data.json');
  if (json.notes[index]) {
    const entry = process.argv[4];
    json.notes[index] = entry;
    const newJSON = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', newJSON, 'utf8', err => {
      if (err) throw err
    });
  } else {
      console.log('Sorry, that index number doesn\'t exist.')
    }
}

module.exports = update;
