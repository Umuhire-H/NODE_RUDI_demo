var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
  console.log("Connected correctly to server.");
  var dbLibrary = dbMongo.db("Library");
  dbLibrary.collection("Books").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[1].author[0]);
    dbMongo.close();
  });
});
