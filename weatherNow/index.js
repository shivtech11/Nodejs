var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=d572465715035d423880c2c70de3b469&units=metric';
var server = http.createServer(function(request, response) {

    var request = require('request');
    request(url, function(err, res, body) {
        var data = JSON.parse(body);
        response.write("<html><body><div id='container' style='height='200' width='500' background-color='yellow''>");

        response.write("<h1>" + 'city name -: ' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'Temperature -: ' + data.main['temp'] + '<br>' + "</h2>");
        response.write("<h2>" + 'Sunset time -: ' + new Date(data.sys['sunset'] * 1000) + '<br>' + "</h2>");
        response.write("<h1> By SHIV </h1>")
        response.write("</div> </body></html > ");
        // response.write("hi");
        response.end();



    });
}).listen(8081);

//console.log(http);