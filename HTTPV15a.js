let http = require('http');

let requestToSend = {   
    "host": "api.irail.be",   
    "port": 80,   
    "path": "/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json"   
};

http.get(requestToSend, receiveResponseCallback);

function receiveResponseCallback (responseFromServer) {
    console.log(responseFromServer);
}