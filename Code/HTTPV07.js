var HTTP = require('http');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

console.log("Server Listening on port 8000");
let toggle = true;

function newClientCallback (request, response) {
    toggle = !toggle;
    if(toggle) response.writeHead(302, {'Location': 'http://www.interface3.be'});
    else response.writeHead(302, {'Location': 'http://www.google.be'});
    response.end();
 }

