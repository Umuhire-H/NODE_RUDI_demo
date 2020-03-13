const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

app.listen(8000, function() {
  console.log('App listening on port 8000');
});

app.get('/zipcodes', function(request, response) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
      function(err, dbMongo) {
        var dbLibrary = dbMongo.db("Address");
        dbLibrary.collection("zipcode").find({}).toArray(function(err, result) {
          if (err) throw err;
          response.setHeader('Content-Type', 'text/json');
          response.send(result);
          dbMongo.close();
        });
      });
});

app.get('/cities', function(request, response) {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
    function(err, dbMongo) {
      var dbLibrary = dbMongo.db("Address");
      dbLibrary.collection("zipcode").find({ zip : "1000"}).toArray(function(err, result) {
        if (err) throw err;
        response.setHeader('Content-Type', 'text/json');
        response.send(result);
        dbMongo.close();
      });
    });
});