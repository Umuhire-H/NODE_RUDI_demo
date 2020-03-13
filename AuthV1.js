// https://dev.to/_marcba/secure-your-node-js-application-with-json-web-token-4d4e
// https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens
// Install first : npm install jsonwebtoken

const jwt = require('jsonwebtoken')
const express = require('express'); 
const app = express();

app.listen(8000, () => {
    console.log(`Server now listening at localhost:8000`);
  });

// Should be defined elsewhere !!!!
const secret = "addjsonwebtokensecretherelikeQuiscustodietipsoscustodes";

app.get("/token", function (request, response) {
    const payload = { user: "Giot" };
    const options = { expiresIn: '2d' };
    const token = jwt.sign(payload, secret, options);
    // send token to client !
    console.log('TOKEN', token);
    response.send("OK your token is : " + token);
});

app.get("/somethingwithtoken", function (request, response) {
    const authorizationHeaader = request.headers.authorization;
    let result;
    if (authorizationHeaader) {
      const token = request.headers.authorization.split(' ')[1]; // Bearer <token>
      try {
            // verify makes sure that the token hasn't expired and has been issued by us
            result = jwt.verify(token, secret);
            console.log(result);
            response.send("Yes, you are in");
            } 
        catch(error) {
            console.error(error.message);
            response.send("Sorry Wrong Token");
            }
        }
    });