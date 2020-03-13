var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
  console.log("Connected correctly to server.");
  var dbLibrary = dbMongo.db("Librairie");
  dbLibrary.collection("Livres").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].title);
    dbMongo.close();
  });
});
