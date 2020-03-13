let HTTP = require('http');
let url = require('url');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

function newClientCallback (request, response) {
    console.log(url.parse(request.url).pathname.toString());
    response.end();
 }

