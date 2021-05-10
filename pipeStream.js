const fs = require('fs');

// create read stream
const readerStream = fs.createReadStream('output.txt');
// write stream
const writerStream = fs.createWriteStream('new.txt', 'UTF8');
// set encoding
readerStream.setEncoding('UTF8');

readerStream.pipe(writerStream);

console.log('Pipe program ended');
