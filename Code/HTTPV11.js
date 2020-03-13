let HTTP = require('http');
let urlProcessing = require('url');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

function newClientCallback (request, response) {
    if(urlProcessing.parse(request.url).pathname.toString()==='/zipcode.node'){
        response.writeHead(200, {'content-type': 'text/json'}); 
        response.end("{town: 'Brussels', zipcode: 1050}");
    }
    else {
        response.writeHead(404, {'content-type': 'text/plain'}); 
        response.end("404 Page not found");
    }
 }

