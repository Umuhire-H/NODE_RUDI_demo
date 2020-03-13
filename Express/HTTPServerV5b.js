var express = require('express');
var app = express();

app.use('/', express.static(__dirname+"/wwwroot"));

app.get('/process_form', function (request, response) {
    response.setHeader('Content-Type', 'text/json');
    if (request.query.city=="Bruxelles") response.send('{"city":"Bruxelles", "zip" : 1000}');
    else if (request.query.city=="Ixelles") response.send('{"city":"Ixelles", "zip" : 1050}');
    else response.send("{}");
});

app.listen(8000, function() {
    console.log('App listening on port 8000');
});