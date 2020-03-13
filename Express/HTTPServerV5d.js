const express = require('express');
const filestream = require('fs');
const app = express();

const fileContent = filestream.readFileSync("code-postaux-belge.json");
const fileContentJSON = JSON.parse(fileContent);

app.use('/', express.static(__dirname+"/wwwroot"));

app.get('/zipcode', function (request, response) {
    response.setHeader('Content-Type', 'text/json');
    const result = fileContentJSON.filter(item => item.city== request.query.city);
    response.send('{"city":"' + result[0].city + '", "zip" : ' + result[0].zip + '}');
});

app.listen(8000, function() {
    console.log('App listening on port 8000');
});