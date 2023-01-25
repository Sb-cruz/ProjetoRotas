var http = require('http');
var url = require('url');

var callback = function(request, response){
    
    response.writeHead(200, {"Content-type":"text/plain"});


    var parts = url.parse(request.url);

    if(parts.path == "/"){
        response.end("Rota principal")
    }else if(parts.path == "/rota1"){
        response.end("Rota alternativa 1")
    }else if(parts.path == "/rota2"){
        response.end("Rota alternativa 2")
    }else{
        response.end("Rota inválida")
    }
};
var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/");