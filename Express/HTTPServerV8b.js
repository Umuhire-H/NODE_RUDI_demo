var express = require('express');
var app = express();

app.delete('/books/:isbn', 
    function (request, response) {
        console.log(request.params.isbn);
        response.setHeader('Content-Type', 'application/html');
        response.send('<H1>Record Deleted</H1>');
        }
    );

app.listen(8000, function() {
        console.log('App listening on port 8000');
});