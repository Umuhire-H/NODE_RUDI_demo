var express = require('express');
var app = express();

app.listen(8000, function() {
  console.log('Example app listening on port 8000');
});

app.get('/', function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send("<strong>Hello World</strong>");
});

app.get('/whattimeisit', function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send("<strong>It is time</strong>");
});