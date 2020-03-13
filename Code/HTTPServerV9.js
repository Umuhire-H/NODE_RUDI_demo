var express = require('express');
var app = express();

app.use(express.json());

app.post('/zipcode', (request, response) => {
    console.log(request.body.zipcode);
    console.log(request.body.city);
    response.setHeader('Content-Type', 'application/html');
    response.send('<H1>Record added to the DB</H1>');
})

app.listen(8000, function() {
        console.log('App listening on port 8000');
});