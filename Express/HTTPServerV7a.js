let https = require('https');

let requestToSend = {   
        "host": "api.exchangeratesapi.io",   
        "port": 443,   
        "path": "/latest"   
        };
        
https.get(requestToSend, receiveResponseCallback);

function receiveResponseCallback (responseFromServer) {
    let rawData="";
    responseFromServer.on('data', (chunk) => { rawData += chunk; });     
    responseFromServer.on('end', function(chunk) { 
        let ratesJSON = JSON.parse(rawData);
        console.log(ratesJSON.rates["USD"]);         
        });  
}

