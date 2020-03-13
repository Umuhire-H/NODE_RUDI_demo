let HTTP = require('http');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(80);

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
        responseFromServer.on('end', function(chunk) { 
            irailDataJSON = JSON.parse(rawData);
            responseToClient.writeHead(200, {'content-type': 'text/json'});
            let timeStampDate = new Date(irailDataJSON.timestamp*1000);
            responseToClient.end("" + irailDataJSON.station + " " + timeStampDate.getHours() + ":" + timeStampDate.getMinutes());
        });  
    } 
}