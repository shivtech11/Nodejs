var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// myReadStream.on('data', function(chunk) {
//     console.log('new chunk rcvd');
//     console.log(chunk);
//     myWriteStream.write("Hi " + chunk);
// });

//or we can use pipe for it
myReadStream.pipe(myWriteStream);