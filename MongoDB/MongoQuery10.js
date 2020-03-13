const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
  function(err, dbMongo) {
    console.log("Connected correctly to server.");
    var dbLibrary = dbMongo.db("Librairie");
    var objectId = new ObjectID("5e395307cd09201d40859f5f");
    dbLibrary.collection("Livres").deleteOne( {"_id" : objectId}, 
    function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      dbMongo.close();
    });
});
