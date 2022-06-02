const http = require('http')

// Cria o objeto server (servidor)
http.createServer(function(req, res){
    res.write('Hello World Node JS') // Escreve a resposta
    res.end() // Finaliza a resposta
}).listen(8080) // Habilita a porta 8080 (http://localhost:8080)

// Caminhos locais não serão mais utilizados: file///home/nome-do-usuario/pastax