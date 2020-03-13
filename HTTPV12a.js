let HTTP = require('http');

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
        let dateGareNord = new Date(dataJSON.timestamp*1000);
        console.log(dateGareNord.getMinutes());
        for(let i=0; i<dataJSON.departures.departure.length; i++) {
            console.log(dataJSON.departures.departure[i].station);
        }
    })
} 
