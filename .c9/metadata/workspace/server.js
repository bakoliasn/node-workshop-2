{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"var http = require('http');\n\n\nvar server = http.createServer(function (req, response) {\n  response.writeHead(200);\n  response.end(\"Hello World\\n\");\n  \n  \n  \n});\nserver.listen(process.env.PORT, process.env.IP);","undoManager":{"mark":16,"position":17,"stack":[[{"start":{"row":0,"column":0},"end":{"row":4,"column":2},"action":"insert","lines":["var http = require('http');","var request = require('request');","","var requestListener = function (req, response) {","  "],"id":1}],[{"start":{"row":4,"column":2},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["}"],"id":3},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":[";"],"id":4}],[{"start":{"row":4,"column":2},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":5,"column":2},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":3,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["var requestListener = function (req, response) {","  ","  ","  ","};"],"id":7},{"start":{"row":3,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["var server = http.createServer(function (request, response) {","  response.writeHead(200, {\"Content-Type\": \"text/plain\"});","  response.end(\"Hello World\\n\");","});"]}],[{"start":{"row":5,"column":32},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":56},"action":"remove","lines":[", {\"Content-Type\": \"text/plain\"}"],"id":9}],[{"start":{"row":7,"column":3},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":48},"action":"insert","lines":["server.listen(process.env.PORT, process.env.IP);"],"id":11}],[{"start":{"row":5,"column":32},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":6,"column":2},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":3,"column":47},"end":{"row":3,"column":48},"action":"remove","lines":["t"],"id":14}],[{"start":{"row":3,"column":46},"end":{"row":3,"column":47},"action":"remove","lines":["s"],"id":15}],[{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"remove","lines":["e"],"id":16}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["u"],"id":17}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":33},"action":"remove","lines":["var request = require('request');"],"id":18}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1447880928355}