var HTTP = require('http');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

console.log("Server Listening on port 8000");


function newClientCallback (request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    let language = request.headers["accept-language"].substring(0,2);
    if (language==="en") response.end("Hello World");
 }

