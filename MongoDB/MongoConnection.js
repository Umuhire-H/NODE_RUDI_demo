const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
  function (err, dbMongo) {
    console.log("Connected correctly to mongo db");
    dbMongo.close();
});
