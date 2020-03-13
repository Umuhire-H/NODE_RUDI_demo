var HTTP = require('http');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(8000);

function newClientCallback (requestFromClient, responseToClient) {
    let rawData="";
    let requestToSend = {   
        "host": "api.irail.be",   
        "port": 80,   
        "path": "/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json"   
    };
    HTTP.get(requestToSend, receiveResponseCallback);
    function receiveResponseCallback (responseFromServer) {  
        responseFromServer.on('data', (chunk) => { rawData += chunk; });
        responseFromServer.on('end', () => { 
            let dataJSON = JSON.parse(rawData);
            responseToClient.writeHead(200, {'content-type': 'text/html'});
            let HTMLToSend = "<html><body>";
            HTMLToSend += "<h1>" + dataJSON.station + "</h1>"
            //for ...
            HTMLToSend += "</body></html>"
            responseToClient.end(HTMLToSend);
        })
    } 
 }

