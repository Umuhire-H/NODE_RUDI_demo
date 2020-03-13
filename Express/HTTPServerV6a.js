var express = require('express');
var app = express();

app.use('/', express.static(__dirname + "/wwwrootzip"));

app.listen(8000);