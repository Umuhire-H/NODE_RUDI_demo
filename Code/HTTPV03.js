var HTTP = require('http');
var HTTPServer = HTTP.createServer(newClientCallback);
HTTPServer.listen(80);

console.log("Server Listening on port 80");

function newClientCallback (request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    let host = request.headers["host"];
    if (host==="www.test.com") response.end("Hello Test");
    if (host==="www.brol.com") response.end("Hello Brol");
    if (host==="www.interface3.be") response.end("Hello I3");
 }

 // attention vous devez pour que cela fonctionne aller ajouter ces lignes dans le fichier hosts
 // 127.0.0.1   www.test.com
 // 127.0.0.1   www.brol.com
 // 127.0.0.1   www.interface3.be
 // ce fichier se trouve dans c:\windows\system32\drivers\etc
