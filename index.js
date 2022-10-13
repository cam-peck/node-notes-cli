const read = require('./read.js');
const jsonData = require('./data.json');

const getNote = Number(process.argv[2]);
read(getNote);
