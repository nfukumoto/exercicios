const fs = require('fs')
const http = require('http')

http.createServer(function(req, res){
    res.end()
}).listen(8080)

fs.appendFile('log-users.txt','testando 1,2,3...\n', (err) => {
    if(err) throw err
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.write('Foi')
})