var fs = require("fs");

console.log('Going to delete a file');

var data = fs.writeFile('./tmp/nodeio3.txt', 'This is a new file in a new directory', function(error, data) {
  if (error) {
    throw error;
  }
  console.log('file deleted');
});
