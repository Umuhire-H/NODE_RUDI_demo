let HTTP = require('http');
let filestream = require('fs');
let url = require('url');

let fileContent = filestream.readFileSync('code-postaux-belge.json');
let zipCodeJSON = JSON.parse(fileContent);

let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(80);

console.log("http://127.0.0.1/zipCode?city=Bruxelles");

function newClientCallback (request, response) {
    if(url.parse(request.url).pathname == '/zipCode') {              
        var url_parts = url.parse(request.url, true);
        let i;
        for(i=0; i<zipCodeJSON.length ;i++) {
            if (zipCodeJSON[i].city===url_parts.query.city) break;
        }                    
        response.writeHead(200, {'content-type': 'text/json'});
        if (i===zipCodeJSON.length) {
            response.end("{}");
        }
        else response.end("{city:'"+ zipCodeJSON[i].city + "', zipCode:" + zipCodeJSON[i].zip+ "}");
    }
}

