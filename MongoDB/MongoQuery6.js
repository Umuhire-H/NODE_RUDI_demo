const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
  console.log("Connected correctly to server.");
  const dbLibrary = dbMongo.db("Librairie");
  const query = { author: "Eric Sarrion" };
  dbLibrary.collection("Livres").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    dbMongo.close();
  });
});
