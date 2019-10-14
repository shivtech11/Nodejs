var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');
    myReadStream.pipe(res);

});
server.listen(3000, '127.0.0.1');
console.log('yo dawgs,now listening to port 3000');

/*
const cars = ["🚗", "🚙", "🚕"];

for (const car of cars) {
    // Drive the car
    console.log(`This is the car ${car}`);
}
*/