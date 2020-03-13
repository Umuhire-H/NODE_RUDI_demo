const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

app.listen(8000, function() {
  console.log('App listening on port 8000');
});

app.get('/', function(request, response) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, dbMongo) {
        var dbLibrary = dbMongo.db("Librairie");
        dbLibrary.collection("Livres").find({}).toArray(function(err, result) {
          if (err) throw err;
          response.setHeader('Content-Type', 'text/html');
          response.send("<H1>" + result[1].author[1] + "</H1>");
        });
        dbMongo.close();
      });
});