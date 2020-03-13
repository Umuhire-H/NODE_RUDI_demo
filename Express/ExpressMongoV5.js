const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
app.use('/', express.static(__dirname+"/wwwroot"));
app.listen(8000, function() {
  console.log('App listening on port 8000');
});

app.get('/zipcodes', function(request, response) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
      function(err, dbMongo) {
        var dbLibrary = dbMongo.db("Adress");
        dbLibrary.collection("ZipCode").find().toArray(function(err, result) {
          if (err) throw err;
          response.setHeader('Content-Type', 'text/json');
          response.send(result);
          dbMongo.close();
        });
      });
});

app.get('/zipcodes/:city', function(request, response) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
      function(err, dbMongo) {
        var dbLibrary = dbMongo.db("Adress");
        const query = { city: request.params.city };
        dbLibrary.collection("ZipCode").find(query).toArray(function(err, result) {
          if (err) throw err;
          response.setHeader('Content-Type', 'text/json');
          response.send(result);
          dbMongo.close();
        });
      });
});