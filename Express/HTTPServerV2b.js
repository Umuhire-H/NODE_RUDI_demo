var express = require('express');
var app = express();

app.listen(8000, function() {
  console.log('Example app listening on port 8000');
});

app.get('/whattimeisit', function(request, response) {
    response.setHeader('Content-Type', 'text/json');
    let maintenant = new Date();
    response.send('{ "hour":' +
                    maintenant.getHours() +
                    ', "minute":' + 
                    maintenant.getMinutes() + 
                    ', "second":' + 
                    maintenant.getSeconds() + '}');
});