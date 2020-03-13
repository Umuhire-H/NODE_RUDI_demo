let HTTP = require('http');
let filestream = require('fs');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

console.log("Server Listening on port 8000");

function newClientCallback (request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    var fileContent = filestream.readFileSync('index.html'); 
    response.end(fileContent);
 }

