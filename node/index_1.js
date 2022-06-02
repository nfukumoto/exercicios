const http = require('http')

// Cria o objeto server (servidor)
http.createServer(function(req, res){
    // Escreve um cabeçalho e trata os caracteres especiais
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    let infoUrl = req.url // Cria uma variável que recebe uma requisição 
    res.write(`<h1>Página: <b>${infoUrl}</b></h1> <p>Hello World Node JS - São Paulo, 31 de maio de 2022</p>`) // Escreve a resposta
    res.end() // Finaliza a resposta
}).listen(8080) // Habilita a porta 8080 (EX.: http://localhost:8080/produtos)

// Caminhos locais não serão mais utilizados: file///home/nome-do-usuario/pastax