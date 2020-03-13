var express = require('express');
var app = express();

app.listen(8000, function() {
  console.log('App listening on port 8000');
});

app.get('/', function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.sendFile( __dirname + "/" + "index.html" );
});