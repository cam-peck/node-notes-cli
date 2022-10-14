const read = require('./read.js');
// const jsonData = require('./data.json');

// const getNote = Number(process.argv[2]);
// read(getNote);

// node index.js ARGUMENT (read, update, create, delete)

// for read, index.js read
// for update, --> index.js update 2 'text-to-update-with'
// for create, index.js create 'text-to-add'
// for delete, index.js delete 2

const operator = process.argv[2];

switch(operator) {
  case 'read':
    read();
    break;
  case 'update':
    console.log('update')
    // update()
    break;
  case 'create':
    console.log('create')
    // create();
    break;
  case 'delete':
    console.log('delete')
    // deleteEntry()
    break;
  default:
    console.log(`That operation, ${operator}, doesn\'t exist.`)

}
