const fs = require('fs');

//console.log('** BEFORE! **');

//fs.readFile('./foo.txt', (err, data) => {
//console.log('** DURING! **');
////if (err) {
////console.log(err.message);
////throw err;
////}

////console.log(data);
////console.log(data.toString('utf8'));
//});

//console.log('** AFTER! **');
//const data = fs.readFileSync('foo.txt', 'utf8');

//console.log(data);
//
fs.mkdir('folder', () => {
  fs.writeFile('folder/file.txt', 'HELLO WORLD', (err) => {
    fs.readFile('folder/file.txt', (err, data) => {
      console.log(data.toString('utf8'));
    });
  });
});
