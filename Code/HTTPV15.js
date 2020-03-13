let HTTP = require('http');
let url = require('url');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(80);
console.log("http://localhost/departures");

function newClientCallback (requestFromClient, responseToClient) {
    if(url.parse(requestFromClient.url).pathname==='/departures') {
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
                let JSONToSend = "[";
                for(let i=0;i<irailDataJSON.departures.number;i++) {
                    JSONToSend += "{ destination : '" + irailDataJSON.departures.departure[i].station + "',"
                        + "time : " + irailDataJSON.departures.departure[i].time + ","
                        + "delay : " + irailDataJSON.departures.departure[i].delay + ","
                        + "canceled : " + irailDataJSON.departures.departure[i].canceled + ","
                        + "track : " + irailDataJSON.departures.departure[i].platform
                        + "},";
                }
                JSONToSend = JSONToSend.slice(0, -1); //remove the last ","
                JSONToSend += "]";
                responseToClient.writeHead(200, {'content-type': 'text/json'});
                responseToClient.end(JSONToSend);
            });  
        } 
    }
    else {
        responseToClient.end("Bad request");
    }
}