var http = require('http');
var server = http.createServer(function (req, response) {
var start = new Date().getTime();
response.writeHead(200);
while (new Date().getTime() - start < 10000);
      response.end("Hello World");


});
server.listen(process.env.PORT, process.env.IP);