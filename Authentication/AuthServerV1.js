const express = require('express');
const app = express();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

app.use('/', express.static(__dirname + "/httpsdoc"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8000);

app.post('/createaccount', function(request, response) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
        console.log(request.body.email);
        let dbLogin = dbMongo.db("Login");
        dbLogin.collection("Accounts").insertOne({email:request.body.email, name:request.body.name, surname:request.body.surname, password:request.body.password1}, 
          function(err, result) {
            if (err) throw err;
            response.setHeader('Content-Type', 'text/html');
            response.send("<strong>Account created</strong>");
            dbMongo.close();
          });
      });
});




