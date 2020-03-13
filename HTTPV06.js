let filestream = require('fs');
let fileContent = filestream.readFileSync('log.csv').toString();
let line = fileContent.split("\r\n");
console.log("Nombre de hit : " + line.length);
