var express = require('express');
var app = express();

app.use('/', express.static(__dirname + "/httpsdoc")); 

app.listen(8000);

app.post('/createaccount', function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send("<strong>Account created</strong>");
});