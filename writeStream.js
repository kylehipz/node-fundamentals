const fs = require('fs');

let data = 'HEY BOY';

// create write stream
const writerStream = fs.createWriteStream('output.txt');

// set encoding
writerStream.write(data, 'UTF8');

// mark the end of the file
writerStream.end();

writerStream.on('finish', () => {
  console.log('Write complete.');
});

writerStream.on('error', (err) => {
  console.log(err.stack);
});

console.log('Program ended');
