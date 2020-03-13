var express = require('express');
var app = express();

app.get('/zipcode/:id', 
    function (request, response) {
        response.setHeader('Content-Type', 'application/json');
        if (request.params.id==1000) response.send('{ "city" : "Brussels" }');
        else response.send('{ "city" : "unknown" }');
        }
    );

app.listen(8000, function() {
        console.log('App listening on port 8000');
});