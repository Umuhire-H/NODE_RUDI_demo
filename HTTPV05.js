let HTTP = require('http');
let filestream = require('fs');
let logFile = filestream.createWriteStream('log.csv');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

console.log("Server Listening on port 8000");

function newClientCallback (request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    response.end("Hello");
    logFile.write("" + request.connection.remoteAddress + " , " + Date.now() + "\r\n");
 }