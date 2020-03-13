const express = require('express');
const filestream = require('fs');
const app = express();

const fileContent = filestream.readFileSync("code-postaux-belge.json");
const fileContentJSON = JSON.parse(fileContent);

app.use('/', express.static(__dirname+"/wwwroot"));

app.get('/zipcode', function (request, response) {
    response.setHeader('Content-Type', 'text/json');
    for(let i=0; i<fileContentJSON.length; i++){
        if(request.query.city===fileContentJSON[i].city){
            response.send('{"city":"' + fileContentJSON[i].city + '", "zip" : ' + fileContentJSON[i].zip + '}');
        }
    }
});

app.listen(8000, function() {
    console.log('App listening on port 8000');
});