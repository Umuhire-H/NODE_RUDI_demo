const HTTP = require('http');
const filestream = require('fs');
const url = require('url');

let fileContent = filestream.readFileSync('code-postaux-belge.json');
let zipCodeJSON = JSON.parse(fileContent);

let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(80);

console.log("Test : http://127.0.0.1/zipCode?city=Bruxelles");

function newClientCallback (request, response) {
    if(url.parse(request.url).pathname == '/zipCode') {              
        var url_parts = url.parse(request.url, true);
        let zipFounded = 0;
        for(let i=0; i<zipCodeJSON.length ;i++) {
            if (zipCodeJSON[i].city===url_parts.query.city) zipFounded = zipCodeJSON[i].zip;
        }                    
        response.writeHead(200, {'content-type': 'text/json'});
        response.end('{"city":'+ url_parts.query.city + ', "zipCode":' + zipFounded + "}");
    }
}

