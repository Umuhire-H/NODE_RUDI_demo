const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, dbMongo) {
      console.log("Connected correctly to server.");
      const dbLibrary = dbMongo.db("Library");
      dbLibrary.collection("Books").findOne({}, function(err, result) {
        console.log(result);
        dbMongo.close();
      });
});
