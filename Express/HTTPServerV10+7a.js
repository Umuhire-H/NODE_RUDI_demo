let https = require('https');
var express = require('express');
var app = express();

let requestToSend = {   
    "host": "api.exchangeratesapi.io",   
    "port": 443,   
    "path": "/latest"   
    };

https.get(requestToSend, receiveResponseCallback);

let rate = 0;

function receiveResponseCallback (responseFromServer) {
    let rawData="";
    responseFromServer.on('data', (chunk) => { rawData += chunk; });     
    responseFromServer.on('end', function(chunk) { 
        let ratesJSON = JSON.parse(rawData);
        rate = parseFloat(ratesJSON.rates["USD"]);         
        });  
}

app.use('/', express.static(__dirname + "/wwwrootconvert"));

app.get('/convert', (request, response) => {
    let amountInDollar = parseFloat(request.query.amount) * rate ;
    response.setHeader('Content-Type', 'text/html');
    response.send('<H1>' + amountInDollar + '</H1>');
})

app.listen(8000, function() {
        console.log('App listening on port 8000');
});