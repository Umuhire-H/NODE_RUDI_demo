let HTTP = require('http');
let url = require('url');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

function newClientCallback (request, response) {
    if(url.parse(request.url).pathname == '/zipCode') {              
        var url_parts = url.parse(request.url, true);             
        console.log(url_parts.query.city);             
    response.writeHead(200, {'content-type': 'text/json'});
    response.end("{city:'Bruxelles', zipCode:1000}");
    }
}

