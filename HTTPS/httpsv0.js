// Generate your own certificate for example at https://www.selfsignedcertificate.com/
const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 443;

let key = fs.readFileSync(__dirname + '/certs/21522499_test.giot.com.key');
let cert = fs.readFileSync(__dirname + '/certs/21522499_test.giot.com.cert');
let options = {
  key: key,
  cert: cert
};

app = express();
app.get('/', (req, res) => {
   res.send('Now using https..');
});

let server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});