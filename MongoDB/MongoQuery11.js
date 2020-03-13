var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
  function(err, dbMongo) {
    console.log("Connected correctly to server.");
    var dbLibrary = dbMongo.db("Librairie");
    var myquery = { title: "Un autre livre" };
    var newvalues = { $set: {title: "Un autre livre 2", author: "New author" } };
    dbLibrary.collection("Livres").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      dbMongo.close();
    });
});
