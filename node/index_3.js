const http = require('http')
const url = require('url')

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    let infoUrl = req.url
    //let q = url.parse(infoUrl, true).query
    let urlProp = url.parse(infoUrl, true)
    let q = urlProp.query
    let rota = urlProp.pathname // Rota - Caminho
    let queryString = urlProp.search // O vem depois da rota
    let txtResult = `Título: ${q.titulo} - Ator: ${q.ator}`
    res.write(`<h1>Página: <b>${rota}</b></h1> <h3>${queryString}</h3><p>Hello World Node JS - São Paulo, 31 de maio de 2022</p>`)
    res.end(txtResult)
}).listen(8080)

// EX.: http://localhost:8080/?titulo=Missão Impossível&ator=Tom Cruise
