var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     // res.end('<html><h1>Hello World!</h1></html>');
//     res.end('Hey Aliens');
// }).listen(8080);


//or another method
var server = http.createServer(function(req, res) {
    //console.log("request was made by : " + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hey Aliens');
});
server.listen(3000, '127.0.0.1');
//console.log('yo dawgs,now listening to port 3000');