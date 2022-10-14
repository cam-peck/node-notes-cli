const readEntry = require('./read.js');
const createEntry = require('./create.js');
const updateEntry = require('./update.js');
const deleteEntry = require('./delete.js')

const operator = process.argv[2]; // node index.js ARGUMENT (read, update, create, delete)

switch(operator) {
  case 'read': // for read, index.js read
    readEntry();
    break;
  case 'update': // for update, --> index.js update 2 'text-to-update-with'
    updateEntry();
    console.log('Entry successfully updated.')
    break;
  case 'create': // for create, index.js create 'text-to-add'
    console.log('Entry successfully created.')
    createEntry();
    break;
  case 'delete': // for delete, index.js delete 2
    deleteEntry()
    console.log('Entry successfully deleted.')
    break;
  default:
    console.log(`That operation, ${operator}, doesn\'t exist.`)
}
