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
        let stationFiltered = dataJSON.departures.departure.filter(departure => departure.station==="Nivelles");
        for(let i=0; i<stationFiltered.length; i++) {
            console.log(stationFiltered[i].time);
        }
    })
} 
