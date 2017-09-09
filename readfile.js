var fs = require("fs");
var filePath = process.argv[2];

console.log('Going to read this file');

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});


console.log('Reading file complete');
