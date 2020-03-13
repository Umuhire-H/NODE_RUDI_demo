var express = require('express');
var app = express();

app.get('/books/:isbn/reviews/:num', 
    function (request, response) {
        response.setHeader('Content-Type', 'application/json');
        if ((request.params.isbn==1234567890)&&(request.params.num==2)) response.send('{ "review" : "Excellent" }');
        else response.send('{ "Review" : "unknown" }');
        }
    );

app.listen(8000, function() {
        console.log('App listening on port 8000');
});