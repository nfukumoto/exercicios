const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
    fs.readFile('template_1.html',function(err,data){
        if(err) throw err
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.write(data)
        res.end()
    })
}).listen(8080)