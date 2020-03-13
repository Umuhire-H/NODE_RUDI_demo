var HTTP = require('http');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

console.log("Server Listening on port 8000");


function newClientCallback (request, response) {
    response.writeHead(200, {'content-type': 'text/json'}); 
    response.end("{name: 'Andy'}");
 }

