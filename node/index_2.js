const http = require('http')
const url = require('url')

// Cria o objeto server (servidor)
http.createServer(function(req, res){
    // Escreve um cabeçalho e trata os caracteres especiais
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    let infoUrl = req.url // Cria uma variável que recebe uma requisição 
    let q = url.parse(infoUrl, true).query // Query = Pesquisa
    let txtResult = `Título: ${q.titulo} - Ator: ${q.ator}`
    res.write(`<h1>Página: <b>${infoUrl}</b></h1> <p>Hello World Node JS - São Paulo, 31 de maio de 2022</p>`) // Escreve a resposta
    res.end(txtResult) // Finaliza a resposta
}).listen(8080) // Habilita a porta 8080 (EX.: http://localhost:8080/?titulo=Missão Impossível&ator=Tom Cruise)

// Caminhos locais não serão mais utilizados: file///home/nome-do-usuario/pastax