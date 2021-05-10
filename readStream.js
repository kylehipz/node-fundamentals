const fs = require('fs');

let data = '';

// create read stream
const readerStream = fs.createReadStream('output.txt');

// set encoding
readerStream.setEncoding('UTF8');

readerStream.on('data', (chunk) => {
  data += chunk;
});

readerStream.on('end', () => {
  //console.log('Read ended.');
  console.log(data);
});

readerStream.on('error', (err) => {
  console.error(err);
});

console.log('Read ended.');
