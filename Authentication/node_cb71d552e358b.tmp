const express = require('express');
const app = express();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use('/', express.static(__dirname + "/httpsdoc"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8000);

app.post('/createaccount', function(request, response) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(request.body.password1, salt, function(err, hashsaltround) {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
                let dbLogin = dbMongo.db("Login");
                dbLogin.collection("Accounts").insertOne({email:request.body.email, name:request.body.name, surname:request.body.surname, hashsaltround}, 
                function(err, result) {
                    if (err) throw err;
                    response.setHeader('Content-Type', 'text/html');
                    response.send("<strong>Account created</strong>");
                    dbMongo.close();
                });
            });
        });
    });
});

app.post('/login', function(request, response) {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbMongo) {
                console.log(request.body.email);
                let dbLogin = dbMongo.db("Login");
                dbLogin.collection("Accounts").findOne({email:request.body.email}, 
                function(err, result) {
                    if (err) throw err;
                    // H(request.body.password) == result.password
                    bcrypt.compare(request.body.password, result.hashsaltround, function(err, result) {
                        if (result=== true) {
                            response.setHeader('Content-Type', 'text/html');
                            response.send("<strong>Login OK</strong>");
                        }
                        else {
                            response.setHeader('Content-Type', 'text/html');
                            response.send("<strong>Wrong Password</strong>");
                        }
                    });
                    dbMongo.close();
                });
            });
});




