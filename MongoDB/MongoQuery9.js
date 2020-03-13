var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
  function(err, dbMongo) {
    console.log("Connected correctly to server.");
    var dbLibrary = dbMongo.db("Librairie");
    dbLibrary.collection("Livres").deleteOne( { "title" : "Programmation avec Node.js" }, 
      function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        dbMongo.close();
      });
});
