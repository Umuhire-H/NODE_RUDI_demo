var HTTP = require('http');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

function newClientCallback (request, response) {
    console.log(request.method);
    console.log(request.httpVersion);
    console.log(request.url);
    response.end();
 }

