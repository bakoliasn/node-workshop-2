var http = require('http');
var request = require('request');

var array = [];

var requestListener = function(req, response) {
    response.writeHead(200);
    var userCity = req.url.substring(1);

    for (var counter = 0; counter < array.length; counter++) {

        if (userCity === array[counter]) {
            response.end('Hello, you are located at ' + array[counter + 1].lat + ', ' + array[counter + 1].lng + '\nThis is a cached response');
        }
    }

    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity, function(err, res, body) {
        console.log(err, res, body);
        if (err) {
            response.end('Sorry, try again! There was an error:' + err);
        }
        else {
            var data = JSON.parse(body);
            var firstResult = data.results[0];

            if (firstResult) {
                var location = data.results[0].geometry.location;
                array.push(userCity);
                array.push(location);
                response.end('Hello, you are located at ' + location.lat + ',' + location.lng + '\nThis is a fresh response');
            }
            else {
                response.end('Sorry there are no results');
            }
        }
    });
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);