var http = require('http');


var server = http.createServer(function (req, response) {
  response.writeHead(200);
  response.end("Hello World\n");
  
  
  
});
server.listen(process.env.PORT, process.env.IP);