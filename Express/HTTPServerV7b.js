let HTTP = require('http');
let express = require('express');
let app = express();

app.get('/stations/:idstation/departures', 
    function (request, response) {
        let rawData="";
        let requestToSend = {   
        "host": "api.irail.be",   
        "port": 80,   
        "path": "/liveboard/?id=" + request.params.idstation + "&lang=fr&format=json"   
        };
        
        HTTP.get(requestToSend, receiveResponseCallback);

        function receiveResponseCallback (responseFromServer) {  
            responseFromServer.on('data', (chunk) => { rawData += chunk; });     
            responseFromServer.on('end', function(chunk) { 
                irailDataJSON = JSON.parse(rawData);
                let JSONToSend = "[";
                for(let i=0;i<irailDataJSON.departures.number;i++) {
                    JSONToSend += "{ \"destination\" : \"" + irailDataJSON.departures.departure[i].station + "\","
                        + "\"time\" : " + irailDataJSON.departures.departure[i].time + ","
                        + "\"delay\" : " + irailDataJSON.departures.departure[i].delay + ","
                        + "\"canceled\" : " + irailDataJSON.departures.departure[i].canceled + ","
                        + "\"track\" : \"" + irailDataJSON.departures.departure[i].platform + "\""
                        + "},";
                }
                JSONToSend = JSONToSend.slice(0, -1); //remove the last ","
                JSONToSend += "]";
                response.setHeader('Content-Type', 'application/json');
                response.send(JSONToSend);
            });  
        }
    });

app.listen(8000);