var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
  console.log("Connected correctly to server.");
  var dbLibrary = dbMongo.db("Librairie");
  dbLibrary.collection("Livres").insertOne( { title: "Un autre livre", author: "Rudi Giot", isbn: "2298711942" }, 
    function(err, result) {
      if (err) throw err;
      dbMongo.close();
    });
});
