// Do not forget : npm install jsonwebtoken

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Should be defined elsewhere !!!!
const secret = "addjsonwebtokensecretherelikeQuiscustodietipsoscustodes";

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
                            const payload = { user: request.body.email };
                            const options = { expiresIn: '2d' };
                            const token = jwt.sign(payload, secret, options);
                            response.setHeader('Content-Type', 'text/json');
                            response.send('{"token": "' + token + '"}');
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

app.get("/somethingwithtoken", function (request, response) {
    const authorizationHeader = request.headers.authorization;
    let result;
    if (authorizationHeader) {
      const token = request.headers.authorization.split(' ')[1]; // Bearer <token>
      try {
            // verify makes sure that the token hasn't expired and has been issued by us
            result = jwt.verify(token, secret);
            console.log(result);
            response.setHeader('Content-Type', 'text/html');
            response.send("Good token , you can have the information");
            } 
        catch(error) {
            console.error(error.message);
            response.setHeader('Content-Type', 'text/html');
            response.send("Sorry Wrong Token");
            }
        }
    else {
        response.setHeader('Content-Type', 'text/html');
        response.send("Please give me a token !");
    }
    });




