var http = require('http'),
    url = require('url'),
    MongoClient = require('mongodb').MongoClient;

var mongoURL = 'mongodb://localhost:27017/';

var newClientCallback = function(request, response) {
    console.log("URL : " + request.url);
    console.log("Query : " + url.parse(request.url, true).query.town);
    var txtResponse = '';
    if (request.url!="/favicon.ico"){
        MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, 
            function(err, dbMongo) {
                var dbLibrary = dbMongo.db("Adress");
                var query = { city: url.parse(request.url, true).query.town };
                dbLibrary.collection("ZipCode").find(query).toArray(function(err, result) {
                    if (err) throw err;
                    txtResponse = '{ "town": "' + result[0].city + '", "zipcode": ' + result[0].zip + ' }';
                    response.writeHead(200, {'Content-Type': 'application/json'});
                    response.end(txtResponse);
                    dbMongo.close();
                    });
                });
    }
    else {
        response.writeHead(404, 'Fuck Favicon');
        response.end();
    }
    
}

var server = http.createServer(newClientCallback);

server.listen(8080);

console.log('Server running at http://127.0.0.1:8080/nomatter.html?town=Ixelles');





