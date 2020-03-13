var express = require('express');
var app = express();

app.use('/', express.static(__dirname+"/wwwroot"));

app.get('/process_form', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    if (request.query.city=="Bruxelles") response.send("<body>1000 Bruxelles</body>");
    else response.send("<body>I don't know</body>");
});

app.listen(8000, function() {
    console.log('App listening on port 8000');
});