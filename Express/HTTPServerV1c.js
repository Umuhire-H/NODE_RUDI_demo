var express = require('express');
var app = express();

app.listen(8000, function() {
  console.log('Example app listening on port 8000');
});

app.get('/whattimeisit', function(request, response) {
  response.setHeader('Content-Type', 'text/json');
  let timeNow = new Date();
  let timeNowJSON = {};
  timeNowJSON.hours = timeNow.getHours();
  timeNowJSON.minutes = timeNow.getMinutes();
  timeNowJSON.seconds = timeNow.getSeconds();
  response.send(JSON.stringify(timeNowJSON));
});