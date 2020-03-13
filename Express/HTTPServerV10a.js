var express = require('express');
var app = express();

app.use('/', express.static(__dirname + "/wwwrootconvert"));

app.get('/convert', (request, response) => {
    let amountInDollar = parseFloat(request.query.amount) * 1.08 ;
    response.setHeader('Content-Type', 'text/html');
    response.send('<H1>' + amountInDollar + '</H1>');
})

app.listen(8000, function() {
        console.log('App listening on port 8000');
});