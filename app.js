const http = require('http');
const fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log("URL страницы: " + request.url);
    if(request.url == '/') {
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if(request.url == '/commands') {
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/commands.html').pipe(response);
    } else if(request.url == '/premium') {
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/premium.html').pipe(response);
    } else if(request.url == '/info') {
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/info.html').pipe(response);
    } else {
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/error.html').pipe(response);
    }
});

server.listen(5000, '127.0.0.1');
