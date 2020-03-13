var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
  function(err, dbMongo) {
    console.log("Connected correctly to server.");
    var dbLibrary = dbMongo.db("Librairie");
    let beginWith = "Ru";
    let exp = new RegExp("^" + beginWith);
    var query = {'author': exp};
    dbLibrary.collection("Livres").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      dbMongo.close();
    });
});
