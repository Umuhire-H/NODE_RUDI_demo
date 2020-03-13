let HTTP = require('http');
let HTTPS = require('https');
let urlProcessing = require('url');
let HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(80);

console.log("http://127.0.0.1/exchange?amount=1000&currency=CAD");

let rawData;

function newClientCallback (requestFromClient, responseToClient) {
        let requestToSend = {   
        "host": "api.exchangeratesapi.io",
        "port": 443,
        "path": "/latest"
    };
        
    HTTPS.get(requestToSend, receiveResponseCallback);

    function receiveResponseCallback (responseFromServer) {
        rawData=""; 
        responseFromServer.on('data', (chunk) => { rawData += chunk; });     
        responseFromServer.on('end', function(chunk) { 
            currencyDataJSON = JSON.parse(rawData);
            responseToClient.writeHead(200, {'content-type': 'text/json'});
            var url_parts = urlProcessing.parse(requestFromClient.url, true);             
            let amountConverted = url_parts.query.amount*currencyDataJSON.rates[url_parts.query.currency];
            responseToClient.end("" + url_parts.query.amount + " EUR = " + amountConverted + " " + url_parts.query.currency);
        });  
    } 
}