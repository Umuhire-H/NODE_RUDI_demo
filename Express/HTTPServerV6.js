var express = require('express');
var app = express();

app.use('/', express.static(__dirname));

app.get('/process_form', 
    function (request, response) {
        response.setHeader('Content-Type', 'application/json');
        if (request.query.city=="Bruxelles") response.send('{ "zipCode" : 1000 }');
        if (request.query.city=="Ixelles") response.send('{ "zipCode" : 1050 }');
        else response.send('{ "zipCode" : "NAN" }');
        }
    );

app.listen(8000, function() {
        console.log('App listening on port 8000');
});