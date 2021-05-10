const dns = require('dns');

dns.resolve4('facebook.com', (err, addresses) => {
  if (err) {
    throw err;
  } else {
    console.log('addresses:' + JSON.stringify(addresses));
  }
});
