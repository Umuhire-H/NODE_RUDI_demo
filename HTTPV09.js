let HTTP = require('http');
let filestream = require('fs');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

function newClientCallback (request, response) {
    let pageToSend="404 Not Found\n";
    if(request.url==='/page1.html'){
        response.writeHead(200, {'content-type': 'text/html'});
        pageToSend = filestream.readFileSync('page1.html');
    }
    else if (request.url==='/page2.html'){
        response.writeHead(200, {'content-type': 'text/html'});
        pageToSend = filestream.readFileSync('page2.html');
    }
    else{
        response.writeHead(404, {'content-type': 'text/plain'});
    }
    response.end(pageToSend);
 }

